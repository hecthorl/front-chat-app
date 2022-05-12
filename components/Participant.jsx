import { useTrack } from 'use-twilio-video'
import AudioTrack from './AudioTrack'
import Avatar from './Avatar'
import VideoTrack from './VideoTrack'

export default function Participant({ participant, callBack }) {
   const { audioOn, audioTrack, videoOn, videoTrack } = useTrack({
      participant
   })
   return (
      <>
         {videoOn ? (
            <VideoTrack
               onClick={callBack}
               name={participant.identity}
               track={videoTrack}
            />
         ) : (
            <Avatar name={participant.identity} />
         )}
         {audioOn && <AudioTrack track={audioTrack} />}
      </>
   )
}
