import Chat from "components/Chat";
import useUserAuth from "hooks/useUserAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useStore from "store";
import Head from "next/head";
import Header from "components/Header";

const RoomId = () => {
   const { push } = useRouter();
   const { isUser, loading } = useUserAuth();
   const socket = useStore(state => state.socket);
   const { roomId, userName, room_Name } = useStore(state => state.roomData);

   useEffect(() => {
      if (!loading) {
         !isUser && push("/");
      }
   }, []);
   return (
      <>
         <Head>
            <title>Room: {room_Name}</title>
         </Head>
         <Header />
         <Chat socket={socket} username={userName} room={roomId} />
      </>
   );
};

export default RoomId;
