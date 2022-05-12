import { useEffect, useRef } from 'react'
import { Box } from '@mantine/core'

export default function AudioTrack({ track }) {
   const audioRef = useRef()
   useEffect(() => {
      if (track) {
         const el = audioRef.current
         track.attach(el)
         return () => {
            track.detach(el)
         }
      }
   }, [track])
   return <Box ref={audioRef} component="audio" />
}
