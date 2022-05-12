import { useState, useEffect } from 'react'
import { Box } from '@mantine/core'
import Participant from './Participant'

export default function BarSide({ defaultMain = {}, participants = [] }) {
   const [mainParticipant, setMainParticipant] = useState(defaultMain)
   const [actualParts, setActualParts] = useState([])

   useEffect(() => {
      setActualParts(participants)
   }, [participants.length])

   const handleClick = data => {
      setMainParticipant(data)
      const callback = prev => {
         return prev.map(item =>
            item.sid === data.sid ? mainParticipant : item
         )
      }
      setActualParts(callback)
   }

   return (
      <Box
         sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 258px',
            gap: 10,
            padding: 16,
            height: 709,
            minWidth: 1048
         }}
      >
         <Box>
            <Box sx={{ position: 'relative', height: '100%' }}>
               <Participant participant={mainParticipant} />
            </Box>
         </Box>
         <Box
            sx={{
               overflowY: 'auto',
               '& > div': {
                  height: 160,
                  marginBottom: 10
               },
               '&::-webkit-scrollbar': {
                  width: 1
               }
            }}
         >
            {actualParts.map(item => (
               <Participant
                  key={item.sid}
                  callBack={() => handleClick(item)}
                  participant={item}
               />
            ))}
         </Box>
      </Box>
   )
}
