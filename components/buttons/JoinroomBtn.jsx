import { Button } from '@mantine/core'
import { IoEnterOutline } from 'react-icons/io5'

export default function JoinRoomBtn({ onClick }) {
   return (
      <Button onClick={onClick} leftIcon={<IoEnterOutline />}>
         Unirse a una reunion
      </Button>
   )
}
