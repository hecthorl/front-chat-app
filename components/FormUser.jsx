import { Box, Button, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import useSessionStorage from 'hooks/useSessionStorage'
import useUserAuth from 'hooks/useUserAuth'

const initialValues = { userName: '' }

export default function FormUser({ handleSubmit }) {
   const { userData } = useUserAuth()
   const [participant, setParticipant] = useSessionStorage('invited', {})
   const { onSubmit, getInputProps, values } = useForm({ initialValues })

   const isParticipant = !!Object.keys(participant).length

   function handleClick() {
      handleSubmit({ userName: userData.name || participant.userName })
   }

   if (userData.name || isParticipant) return <GoxBox onClick={handleClick} />
   return (
      <>
         <Box
            onSubmit={onSubmit(values => {
               setParticipant({ userName: values.userName })
               handleSubmit({ userName: values.userName })
            })}
            component="form"
         >
            <Text component="p" sx={{ color: 'white', fontSize: '2rem' }}>
               ¿Como te llamas?
            </Text>
            <TextInput
               mb="1rem"
               label={<Text sx={{ color: 'white' }}>Tu nombre</Text>}
               size="md"
               variant="filled"
               sx={{ width: '300px' }}
               placeholder="Tu nombre"
               {...getInputProps('userName')}
            />
            <Box
               sx={{
                  display: 'inline-flex',
                  gap: '1rem',
                  justifyContent: 'center'
               }}
            >
               <Button
                  disabled={!values.userName.trim().length}
                  type="submit"
                  radius="xl"
                  children="Unirse"
               />
               <Button
                  disabled
                  radius="xl"
                  variant="outline"
                  sx={{
                     ':hover': { backgroundColor: 'rgb(0 0 0 / 35%)' }
                  }}
                  children="Presentar"
               />
            </Box>
         </Box>
      </>
   )
}

function GoxBox({ onClick }) {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
         }}
      >
         <Text component="p" sx={{ fontSize: '2rem', color: 'white' }}>
            ¿Todo listo para unirte?
         </Text>
         <Button
            onClick={onClick}
            sx={{ width: 'fit-content', borderRadius: '99999px' }}
            children="Unirse ahora"
         />
      </Box>
   )
}
