import { useRouter } from 'next/router'
import { Box, Button, Loader, Overlay, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import useUserAuth from 'hooks/useUserAuth'
import useBool from 'hooks/useBool'
import v8nFields, { checkSimbols } from 'helpers/v8nFields'
import {
   TWILIO_TOKEN_URL,
   initFormValues,
   opt,
   BACK_BASE_URL
} from 'helpers/constants'
import randomUID from 'helpers/randomUID'
import fetching from 'helpers/fetching'

export default function NewRoom() {
   const { push } = useRouter()
   const form = useForm({ initialValues: initFormValues })
   const { userData } = useUserAuth()
   const [isOverlay, setIsOverlay] = useBool()

   return (
      <>
         {isOverlay && (
            <Overlay
               children={<Loader color="indigo" />}
               sx={{ display: 'grid', placeContent: 'center' }}
               radius="lg"
            />
         )}
         <Text align="center">Crear Sala</Text>
         <form
            onSubmit={form.onSubmit(values => {
               if (
                  !v8nFields(5, values.roomName) ||
                  checkSimbols(values.roomName)
               ) {
                  return form.setFieldError(
                     'roomName',
                     'Campo debe ser mayor a 5 caracteres (a-z)'
                  )
               }

               const roomInfo = {
                  roomId: randomUID(),
                  roomName: values.roomName.trim(),
                  ownerRoom: {
                     img: userData.image,
                     name: userData.name,
                     ownerId: userData.email
                  }
               }

               const roomInfo2 = {
                  identity: userData.name,
                  room: roomInfo.roomId
               }
               setIsOverlay.on()
               Promise.all([
                  fetching(BACK_BASE_URL, opt(roomInfo)),
                  fetching(TWILIO_TOKEN_URL, opt(roomInfo2))
               ]).then(data => {
                  form.reset()
                  push(
                     `videoChat/${roomInfo.roomId}?roomToken=${data[1].token}`,
                     `videoChat/${roomInfo.roomId}`
                  )
               })
            })}
         >
            <Box
               sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
               <TextInput
                  mb={!form.errors.roomName ? 26.69 : 0}
                  error={form.errors.roomName}
                  placeholder="Nombre de sala"
                  label="Nombre de sala"
                  {...form.getInputProps('roomName')}
               />
               <Button
                  leftIcon={<AiOutlinePlusSquare />}
                  fullWidth
                  type="submit"
               >
                  Crear Sala
               </Button>
            </Box>
         </form>
      </>
   )
}
