import { useEffect, useRef, useCallback } from 'react'
import { Box, ActionIcon, Tooltip, Button } from '@mantine/core'
import VideoRoomOptions from 'components/VideoRoomOptions'

import { useHover } from '@mantine/hooks'
import Pin from 'components/buttons/Pin'

export default function R({ size = 1 }) {
   const videoRef = useRef(null)
   const { hovered, ref } = useHover()
   useEffect(() => {
      const el = videoRef.current
      if (el) {
         navigator.mediaDevices
            .getUserMedia({
               video: true,
               audio: true
            })
            .then(track => {
               el.srcObject = track
            })
            .catch(console.error)
      }
   }, [])

   return (
      <Box // No se toca, es el layout
         sx={{
            backgroundColor: '#202124',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
         }}
      >
         <Box
            sx={{
               flex: 1,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <Box
               sx={{ width: 300, height: 200, background: 'white' }}
               ref={ref}
            >
               <Pin isHovered={hovered} />
            </Box>
         </Box>
         <VideoRoomOptions />
      </Box>
   )
}

function valuesRandom() {
   return [
      {
         color: '#b10331',
         id: '08f55e57-cd18-4b54-bd62-a81afcb29ad4'
      },
      {
         color: '#885016',
         id: '90ec2e44-318e-4aa9-99fb-bff380080f02'
      },
      {
         color: '#74eb2a',
         id: 'a5cd0bc2-b00c-4a80-8ed6-2b5739487b16'
      },
      {
         color: '#bea2bf',
         id: '7f1c8166-b49f-43b1-8f34-260b292c031a'
      },
      {
         color: '#4fefad',
         id: '9b4c58c0-9fcb-4dbb-b02e-794abad6688f'
      },
      {
         color: '#e39d4d',
         id: 'bb72f86f-7c47-46c5-b6e1-b4a02cd95dc6'
      },
      {
         color: '#b3cff5',
         id: 'c4765371-ff0d-42eb-afaa-c0439906ac5f'
      },
      {
         color: '#a44ab1',
         id: '5c2271d7-80d2-4406-b130-41733dab3ea8'
      },
      {
         color: '#88af36',
         id: 'f220e60f-6ac6-446c-a99c-27a88e2a55a9'
      },
      {
         color: '#b6598c',
         id: 'c634a912-f491-494c-8fb5-8eb921bcc35a'
      },
      {
         color: '#a6ffe4',
         id: 'e3bca9ed-9795-4cbd-9026-0e03bdc04fc3'
      },
      {
         color: '#6ff89e',
         id: 'b41b28a4-68dc-4817-8228-63b7ff528c8c'
      },
      {
         color: '#200ca7',
         id: '2eac8d15-6204-4530-97e5-fc1e1e186ef8'
      },
      {
         color: '#8b97fa',
         id: 'ff2c4255-dd95-4177-a396-2312ec9258c2'
      },
      {
         color: '#96a805',
         id: 'c3c316a3-3b6d-49f0-913f-07ed8e42e515'
      }
   ]
}
