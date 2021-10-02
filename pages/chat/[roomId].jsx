import useUserAuth from 'hooks/useUserAuth'
import { useRouter } from 'next/router'
import useStore from 'store'
import Header from 'components/Header'
import { getSession } from 'next-auth/client'
import Chat from 'components/Chat'
import { useEffect } from 'react'
import LHead from 'components/LHead'

const RoomId = ({ roomData }) => {
   const { push } = useRouter()
   const { isUser } = useUserAuth()
   const socket = useStore(state => state.socket)
   const setMessages = useStore(state => state.setMessages)
   const { roomId, roomName, chat } = roomData

   useEffect(() => {
      if (!isUser) push('/')
      socket.emit('join_channel', roomId)
      setMessages(chat)
   }, [])
   return (
      <>
         <LHead title={`Room: ${roomName}`} />
         <Header />
         <div className="w-full border-t border-gray-300 grid grid-cols-1 md:grid-cols-tres">
            <div className="hidden md:block"></div>
            <Chat room={roomId} />
            <div className="hidden md:block"></div>
         </div>
      </>
   )
}

export default RoomId

export const getServerSideProps = async context => {
   const { roomId } = context.params
   const session = await getSession(context)
   const BASE_URL = process.env.BASE_URL
   const res = await fetch(`${BASE_URL}/roominfo?roomId=${roomId}`)
   const data = await res.json()

   return {
      props: { session, roomData: data.roomData }
   }
}
