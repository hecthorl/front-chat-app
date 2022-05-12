import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { Box } from '@mantine/core'
import VideoRoom from 'components/VideoRoom'
import Lobby from 'components/Lobby'
import useTwilioConfig from 'hooks/useTwilioConfig'
import useBool from 'hooks/useBool'
import useUserAuth from 'hooks/useUserAuth'

export default function VideoChatRoom({ roomData, twilioToken }) {
   const { userData } = useUserAuth()
   const [isJoin, setJoin] = useBool()
   const { getToken, identity, roomName, token } = useTwilioConfig()
   return (
      <>
         <Head>
            <title>Room: {roomData.roomName}</title>
            <meta name="description" content="room" />
         </Head>
         <Box
            sx={{
               backgroundColor: '#202124',
               minHeight: '100vh',
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            {isJoin || twilioToken ? (
               <VideoRoom
                  token={token || twilioToken}
                  identity={userData.name || identity}
                  roomName={roomData.roomId || roomName}
                  onDisconnected={() => setJoin.off()}
               />
            ) : (
               <Lobby
                  handleSubmit={data => {
                     getToken({
                        identity: data.userName,
                        roomName: roomData.roomId
                     })
                     setJoin.on()
                  }}
               />
            )}
         </Box>
      </>
   )
}

/**
 * @param {import('next').GetServerSidePropsContext} ctx
 */
export async function getServerSideProps(ctx) {
   const session = await getSession(ctx)
   const twilioToken = ctx.query.roomToken ?? null
   const URI = process.env.BACK_BASE_URL

   const url = `${URI}/roominfo?roomId=${ctx.params.roomId}`
   const res = await fetch(url)
   const { roomData } = await res.json()

   return { props: { roomData, session, twilioToken } }
}
