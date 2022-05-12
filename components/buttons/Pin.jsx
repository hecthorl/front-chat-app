import { ActionIcon, Tooltip } from '@mantine/core'
import { BsFillPinAngleFill } from 'react-icons/bs'

export default function Pin({ isHovered, onClick }) {
   return (
      <Tooltip label="Fijar en la pantalla principal">
         <ActionIcon
            onClick={onClick}
            variant={isHovered ? 'filled' : 'transparent'}
            radius="xl"
            children={isHovered && <BsFillPinAngleFill />}
         />
      </Tooltip>
   )
}
