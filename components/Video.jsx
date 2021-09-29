import { useEffect, useRef } from 'react'

const Video = ({ autoPlay, controls, srcObject, muted }) => {
   const videoRef = useRef(null)
   useEffect(() => {
      videoRef.current.srcObject = srcObject
   }, [])

   return (
      <video
         ref={videoRef}
         autoPlay={autoPlay}
         controls={controls}
         muted={muted}
      ></video>
   )
}

export default Video
