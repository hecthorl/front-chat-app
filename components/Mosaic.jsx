import { Box } from '@mantine/core'
import { FRAMES } from 'helpers/constants'

export default function Mosaic({ size = 1, children }) {
   return (
      <Box
         sx={{
            flex: 1,
            position: 'relative',
            '@media (max-width: 657px)': {
               overflowY: 'auto'
            }
         }}
      >
         <Box
            sx={{
               position: 'absolute',
               inset: '16px 16px 0 16px',
               '@media  (max-width: 657px)': {
                  inset: `16px 16px ${size >= 5 ? 'auto' : 0} 16px`
               }
            }}
         >
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  ...FRAMES[size],
                  placeContent: 'center',
                  gap: '10px',
                  transition: 'grid-template .5s ease'
               }}
            >
               {children}
            </Box>
         </Box>
      </Box>
   )
}
