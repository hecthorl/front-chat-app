import Header from 'components/Header'
import LHead from 'components/LHead'
import { useEffect, useRef, useState } from 'react'
import useStore from 'store'
import Peer from 'simple-peer'
import useUserAuth from 'hooks/useUserAuth'

export default function VideoCall() {
   const [stream, setStream] = useState(null)
   const [call, setCall] = useState({})
   const [callAccepted, setCallAccepted] = useState(false)
   const [callEnded, setCallEnded] = useState(false)
   const socket = useStore(state => state.socket)
   const [me, setMe] = useState('')
   const myVideoRef = useRef(null)
   const userVideoRef = useRef(null)
   const connectionPeerRef = useRef(null)

   const { userData } = useUserAuth()

   useEffect(() => {
      navigator.mediaDevices
         .getUserMedia({ video: true, audio: true })
         .then(stream => {
            setStream(stream)
            myVideoRef.current.srcObject = stream
         })
         .catch(err => {
            console.log(err)
         })
      socket.on('me', setMe)
      socket.on('calluser', data => {
         console.log({ data })
         setCall({
            isReceivedCall: true,
            ...data
         })
      })
   }, [])

   const answerCall = () => {
      setCallAccepted(true)
      const peer = new Peer({ initiator: false, stream, trickle: false })
      peer.on('signal', data => {
         const objt = {
            signal: data,
            to: call.from
         }
         socket.emit('ansercall', objt)
      })
      peer.on('stream', currentStream => {
         userVideoRef.current.srcObject = currentStream
      })
      peer.signal(call.signal)
      connectionPeerRef.current = peer
   }

   const callUser = id => {
      const peer = new Peer({ initiator: true, stream, trickle: false })
      peer.on('signal', data => {
         const objt = {
            signalData: data,
            to: call.from,
            userToCall: id,
            from: me,
            name: userData?.user?.name
         }
         socket.emit('calluser', objt)
      })
      peer.on('stream', currentStream => {
         userVideoRef.current.srcObject = currentStream
      })
      socket.on('callaccepted', signal => {
         setCallAccepted(true)
         peer.signal(signal)
      })
      connectionPeerRef.current = peer
   }

   const leaveCall = () => {
      setCallEnded(true)
      connectionPeerRef.current.destroy()
      if (typeof window !== 'undefined') location.reload()
   }
   const [input, setInput] = useState('')
   console.log({ myid: socket.id })
   return (
      <>
         <LHead title="Video Llama" />
         <Header />
         <div className="flex flex-col max-w-[1000px] w-full justify-center">
            <div className="w-full mx-auto">
               <video ref={myVideoRef} autoPlay muted controls />
               {callAccepted && !callEnded && (
                  <video ref={userVideoRef} autoPlay muted controls />
               )}
            </div>
            <div>
               <h1>make a call</h1>
               {callAccepted && !callEnded ? (
                  <>
                     <button
                        onClick={leaveCall}
                        className="w-[500px] p-3 bg-[red]"
                     >
                        Hang up
                     </button>
                  </>
               ) : (
                  <>
                     <input
                        className="border border-yellow-400"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                     />
                     <button
                        onClick={() => callUser(input)}
                        className="w-[500px] p-3 bg-[lime]"
                     >
                        call
                     </button>
                  </>
               )}
               {call.isReceivedCall && !callAccepted && (
                  <>
                     <p>{call.name + ' is calling'}</p>
                     <button onClick={answerCall}>Responder</button>
                  </>
               )}
            </div>
         </div>
      </>
   )
}
