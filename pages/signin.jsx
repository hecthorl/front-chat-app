import Head from 'components/Head'
import { getProviders, signIn } from 'next-auth/react'
import { Box, Button, Text } from '@mantine/core'
import GoogleIcon from 'components/GoogleIcon'
import { IoEnterOutline } from 'react-icons/io5'

export default function Signin({ providers }) {
   return (
      <>
         <Head
            desc="Ingreso a google-meet clone"
            title="Sign In - Google meet-clone"
         />
         <Box
            sx={{
               display: 'flex',
               minHeight: '100vh',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <Box
               sx={{
                  borderRadius: '8px',
                  display: 'flex',
                  border: '1px solid #dadce0',
                  flexDirection: 'column',
                  width: '448px',
                  padding: '0 2rem',
                  gap: '1rem',
                  alignItems: 'center',
                  paddingBottom: '3rem'
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: '.5rem',
                     padding: '1rem 0 0 0'
                  }}
               >
                  <GoogleIcon />
                  <Text sx={{ fontSize: '24px' }}>Inciar sesión</Text>
                  <Text> Utiliza tu cuenta de Google </Text>
               </Box>
               {Object.values(providers).map(provider => (
                  <Button
                     key={provider.name}
                     onClick={() =>
                        signIn(provider.id, {
                           redirect: true,
                           callbackUrl: '/'
                        })
                     }
                     radius="xl"
                     children="Ir con Google"
                     leftIcon={<IoEnterOutline />}
                  />
               ))}
            </Box>
         </Box>
      </>
   )
}

export async function getServerSideProps() {
   const providers = await getProviders()
   return {
      props: { providers }
   }
}
