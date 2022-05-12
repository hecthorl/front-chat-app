import dynamic from 'next/dynamic'
import { useCallback } from 'react'
import { COLORS } from 'helpers/constants'

const MantineAvatar = dynamic(
   () => import('@mantine/core').then(({ Avatar }) => Avatar),
   {
      ssr: false
   }
)

export default function Avatar({ name = 'xavier dante' }) {
   const a = useCallback(() => Math.floor(Math.random() * COLORS.length), [])
   return (
      <MantineAvatar
         sx={{ borderRadius: '99999px', textTransform: 'capitalize' }}
         size="xl"
         color={COLORS[a()]}
         alt={name}
      >
         {name
            .split(' ')
            .map(i => i[0])
            .join('')}
      </MantineAvatar>
   )
}
