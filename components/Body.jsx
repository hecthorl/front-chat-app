import { Box, Button, Divider, Input, Text } from '@mantine/core'
import { FaKeyboard } from 'react-icons/fa'
import { body } from 'helpers/constants'
import NewRoomBtn from './buttons/NewMeetBtn'

export default function Body() {
   return (
      <Box sx={body}>
         <Box>
            <Text
               component="p"
               sx={{
                  margin: 0,
                  fontSize: '2rem',
                  textAlign: 'center'
               }}
            >
               Videollamadas Premium. Ahora gratis para todos.
            </Text>
            <Text component="p" size="md" sx={{ color: '#333' }}>
               Hemos rediseñado nuestro servicio de reuniones seguras de alta
               calidad para empresas, Google Meet, para que todo el mundo pueda
               usarlo en cualquier dispositivo.
            </Text>
            <Box
               sx={{
                  width: 'fit-content',
                  display: 'flex',
                  flexDirection: 'column',
                  '@media (min-width: 600px)': {
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     alignItems: 'center',
                     gap: '1rem'
                  }
               }}
            >
               <NewRoomBtn />
               <Input
                  sx={{ width: 'fit-content' }}
                  icon={<FaKeyboard />}
                  my={10}
               />
               <Button sx={{ width: 'fit-content' }}>Unirse</Button>
            </Box>
            <Text mt={20}>¿No tienes una cuenta?Regístrate gratis</Text>
            <Divider mt={20} />
         </Box>
         <Box>
            <img
               style={{
                  width: '100%',
                  paddingTop: '1rem'
               }}
               src="meet.png"
            />
         </Box>
      </Box>
   )
}
