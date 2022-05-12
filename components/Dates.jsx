import { Box } from '@mantine/core'
const dates = new Intl.DateTimeFormat('es-ES', {
   month: 'short',
   day: '2-digit',
   weekday: 'short'
}).format(Date.now())

const Dates = () => {
   return <Box mr={10} component="span" children={dates} />
}

export default Dates
