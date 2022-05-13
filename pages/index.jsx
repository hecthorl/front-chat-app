import { getSession } from 'next-auth/react'
import Head from 'components/Head'
import { Box } from '@mantine/core'
import Header from 'components/Header'
import Body from 'components/Body'
import SettingsMeetModal from 'components/SettingsMeetModal'

export default function Home() {
   return (
      <>
         <Head
            desc="Clon funcional de google meet para video-llamadas"
            title="Google Meet-clone"
         />
         <Box
            sx={{
               minHeight: '100vh',
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            <Header />
            <Body />
         </Box>
         <SettingsMeetModal />
      </>
   )
}

/**
 * @param {import('next').GetServerSidePropsContext} ctx
 */
export async function getServerSideProps(ctx) {
   const session = await getSession(ctx)

   return { props: { session } }
}
