import { useRef, useEffect } from 'react'
import { Box, Text } from '@mantine/core'
import { videoContainer, videoTag } from 'helpers/constants'
import Avatar from 'components/Avatar'
import useUserAuth from 'hooks/useUserAuth'

export default function VideoTrack({ track, name, isVideoOn }) {
   const videoRef = useRef(null)
   const { userData } = useUserAuth()
   useEffect(() => {
      if (track) {
         const el = videoRef.current
         track.attach(el)
         return () => {
            track.detach(el)
         }
      }
   }, [track])
   const transform = name === userData?.name ? 'scaleX(-1)' : 'scaleX(1)'
   return (
      <Box sx={videoContainer}>
         <Box
            sx={{ ...videoTag, transform, zIndex: isVideoOn ? 999999 : 0 }}
            component="video"
            autoPlay
            ref={videoRef}
         />
         <Avatar name={name} />
         <Text
            children={name}
            sx={{
               position: 'absolute',
               bottom: '1rem',
               color: 'white',
               left: '1rem',
               zIndex: 10
            }}
         />
      </Box>
   )
}
