import AppbarMenu from 'components/AppbarMenu'
import ChatAside from 'components/ChatAside'
import LHead from 'components/LHead'
import VideoGrid from 'components/VideoGrid'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import useStore from 'store'
import addPeer from 'utils/addPeer'
import createPeer from 'utils/createPeer'

export default function Videchat() {
   const socket = useStore(state => state.socket)
   const peers = useStore(state => state.peers)
   const setPeers = useStore(state => state.setPeers)
   const setCurrentVideoRef = useStore(state => state.setCurrentVideoRef)
   // const { pathname } = useRouter()
   const currentVideoRef = useRef(null)
   const peersRef = useRef([])

   useEffect(() => {
      setCurrentVideoRef(currentVideoRef)
      navigator.mediaDevices
         .getUserMedia({ video: true, audio: true })
         .then(stream => {
            currentVideoRef.current.srcObject = stream
            socket.emit('join_videoroom', 'sVA5Zy7ZF7r63Cfl-vhQo')
            socket.on('all users', users => {
               const peers = []
               users.forEach(userID => {
                  const peer = createPeer(userID, socket.id, stream, socket)
                  peersRef.current.push({
                     peerID: userID,
                     peer
                  })
                  peers.push(peer)
               })
               setPeers(peers)
            })
            socket.on('user joined', payload => {
               const peer = addPeer(
                  payload.signal,
                  payload.callerID,
                  stream,
                  socket
               )
               peersRef.current.push({
                  peerID: payload.callerID,
                  peer
               })

               setPeers(peer)
            })

            socket.on('receiving returned signal', payload => {
               console.log({ payload })
               const item = peersRef.current.find(p => p.peerID === payload.id)
               item.peer.signal(payload.signal)
            })
         })
   }, [])
   console.log(peers)
   return (
      <>
         <LHead title="Video Chat" />
         <div className="w-screen h-screen bg-gray-600 flex flex-col">
            <div className="w-full flex-grow h-full flex p-1 gap-x-5 px-4">
               <VideoGrid />
               <ChatAside />
            </div>
            <AppbarMenu />
         </div>
      </>
   )
}
