import { useTrack } from 'use-twilio-video'
import AudioTrack from './AudioTrack'
import VideoTrack from './VideoTrack'

export default function Participant({ participant, callBack }) {
   const { audioOn, audioTrack, videoOn, videoTrack } = useTrack({
      participant
   })
   return (
      <>
         <VideoTrack
            isVideoOn={videoOn}
            onClick={callBack}
            name={participant.identity}
            track={videoTrack}
         />
         {audioOn && <AudioTrack track={audioTrack} />}
      </>
   )
}
