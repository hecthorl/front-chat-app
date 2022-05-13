import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'
import { Box } from '@mantine/core'
import Video from 'twilio-video'

const FormUser = dynamic(() => import('./FormUser'), { ssr: false })

export default function Lobby({ handleSubmit }) {
   const videoRef = useRef(null)

   useEffect(() => {
      Video.createLocalVideoTrack().then(track => {
         track.attach(videoRef.current)
      })
   }, [])
   return (
      <Box
         sx={{
            width: '100%',
            display: 'flex',
            minHeight: 'inherit',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Box
            sx={{
               display: 'flex',
               width: '100%',
               maxWidth: '1236px',
               height: '540px'
            }}
         >
            <Box
               sx={{
                  maxWidth: '764px',
                  flexGrow: 1,
                  width: '100%',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
            >
               <Box
                  sx={{
                     position: 'relative',
                     width: '100%',
                     height: '416px',
                     overflow: 'hidden'
                  }}
               >
                  <Box
                     sx={{ width: '100%', transform: 'scaleX(-1)' }}
                     autoPlay
                     component="video"
                     ref={videoRef}
                  />
               </Box>
            </Box>
            <Box
               sx={{
                  flex: '0 0 448px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <FormUser handleSubmit={handleSubmit} />
            </Box>
         </Box>
      </Box>
   )
}
