import { Box, Button, Text, ThemeIcon } from '@mantine/core'
import useUserAuth from 'hooks/useUserAuth'
import Link from 'next/link'
import NewRoomBtn from './buttons/NewMeetBtn'
import IconBrand from './IconBrand'
import UserNav from './UserNav'

export default function Header() {
   const { userData, signIn } = useUserAuth()
   return (
      <Box
         py={5}
         px={10}
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
         <Link passHref href="/">
            <Box
               sx={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#333'
               }}
               component="a"
            >
               <ThemeIcon
                  sx={{
                     background: 'transparent',
                     width: '60px',
                     height: '60px',
                     fontSize: '60px'
                  }}
               >
                  <IconBrand />
               </ThemeIcon>
               <Text component="p" my={0}>
                  <Box
                     sx={{ display: 'block', fontSize: '1.2rem' }}
                     component="span"
                  >
                     Google
                  </Box>
                  <Box
                     sx={{ display: 'block', fontSize: '1.2rem' }}
                     component="span"
                  >
                     Meet
                  </Box>
               </Text>
            </Box>
         </Link>
         <Box
            sx={{
               display: 'none',
               color: '#5f6368',
               fontSize: '1.1rem',
               '@media (min-width: 500px)': {
                  display: 'flex',
                  alignItems: 'center'
               }
            }}
         >
            {userData.email ? (
               <UserNav />
            ) : (
               <>
                  <Button
                     onClick={() => signIn()}
                     variant="outline"
                     mr={10}
                     children="Iniciar session"
                  />
                  <NewRoomBtn />
               </>
            )}
         </Box>
      </Box>
   )
}
