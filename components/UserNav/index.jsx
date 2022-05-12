import { Box, Popover, Avatar, Divider, Text, Button } from '@mantine/core'
import Dates from 'components/Dates'
import useBool from 'hooks/useBool'
import useUserAuth from 'hooks/useUserAuth'
import dynamic from 'next/dynamic'

const Hour = dynamic(() => import('components/Hour'), { ssr: false })

export default function UserNav() {
   const { userData, signOut } = useUserAuth()
   const [isOpen, setOpen] = useBool()

   return (
      <>
         <Hour color="inherit" />
         <Box mx={10} component="span" children="•" />
         <Dates />
         <Popover
            spacing={0}
            opened={isOpen}
            onClose={setOpen.off}
            position="bottom"
            target={
               <Avatar
                  sx={{ cursor: 'pointer' }}
                  onClick={setOpen.on}
                  radius="xl"
                  name={userData.name}
                  src={userData.image}
               />
            }
         >
            <Box
               my={20}
               sx={{
                  width: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center'
                  }}
               >
                  <Avatar
                     sx={{ borderRadius: '99999px' }}
                     size="xl"
                     onClick={setOpen.on}
                     name={userData.name}
                     src={userData.image}
                     mb={10}
                  />
                  <Text sx={{ fontWeight: '500' }}>{userData.name}</Text>
                  <Text sx={{ color: '#5f6368' }}>{userData.email}</Text>
               </Box>
               <Divider my={20} sx={{ width: '100%' }} />
               <Button onClick={() => signOut()} variant="outline">
                  Cerrar sessión
               </Button>
               <Divider my={20} sx={{ width: '100%' }} />
               <Box
                  sx={{
                     width: '100%',
                     textAlign: 'center',
                     color: '#5f6368',
                     userSelect: 'none'
                  }}
               >
                  <Text size="sm" component="small">
                     Politica de Privacidad
                  </Text>
                  <Text mx={20} component="small">
                     •
                  </Text>
                  <Text size="sm" component="small">
                     Términos del servicio
                  </Text>
               </Box>
            </Box>
         </Popover>
      </>
   )
}
