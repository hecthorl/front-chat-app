import { useState } from 'react'
import { Box } from '@mantine/core'
import useInterval from 'hooks/useInterval'

const date = new Intl.DateTimeFormat('es-PE', {
   hour: 'numeric',
   minute: '2-digit'
}).format(Date.now())

export default function Hour({ color }) {
   const [hour, setHour] = useState(date)

   useInterval(() => {
      const currentHour = new Intl.DateTimeFormat('es-PE', {
         hour: 'numeric',
         minute: '2-digit'
      }).format(Date.now())
      setHour(currentHour)
   }, 1e3)

   return (
      <Box
         component="time"
         dateTime={hour}
         children={hour}
         sx={{
            color,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
         }}
      />
   )
}
