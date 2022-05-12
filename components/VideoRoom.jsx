import { useEffect } from 'react'
import { useRoom } from 'use-twilio-video'
import VideoRoomOptions from './VideoRoomOptions'
import Participant from './Participant'
import Mosaic from './Mosaic'
// import BarSide from './BarSide'

export default function VideoRoom({ token, roomName }) {
   const {
      room,
      error,
      connectRoom,
      disconnectRoom,
      localParticipant,
      remoteParticipants,
      dominantSpeaker,
      isCameraOn,
      toggleCamera,
      isMicrophoneOn,
      toggleMicrophone
   } = useRoom()
   // console.log(isCameraOn)
   useEffect(() => {
      if (!room && token && roomName) {
         connectRoom({
            token,
            options: { name: roomName, dominantSpeaker: true }
         })
         return () => disconnectRoom()
      }
   }, [connectRoom, disconnectRoom, room, roomName, token])

   // console.log(localParticipant?.identity)

   if (error) return `Error: ${error.message}`
   if (!room) return <div>Connecting...</div>
   return (
      <>
         <Mosaic size={room.participants.size + 1}>
            <Participant participant={localParticipant} />
            {remoteParticipants.map((item, i) => (
               <Participant key={i} participant={item} />
            ))}
         </Mosaic>
         {/* <BarSide
            defaultMain={localParticipant}
            participants={remoteParticipants}
         /> */}
         <VideoRoomOptions
            toggleCamera={toggleCamera}
            toggleMicrophone={toggleMicrophone}
            isCameraOn
            isMicrophoneOn
         />
      </>
   )
}
