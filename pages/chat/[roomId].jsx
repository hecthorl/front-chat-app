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

   console.log({ isUser, loading });

   useEffect(() => {
      if (loading) {
         !isUser && push("/");
      }
   }, []);
   return (
      <>
         <Head>
            <title>Room: {room_Name}</title>
         </Head>
         <Header />
         <div className="w-full border-t border-gray-300 grid grid-cols-tres">
            <div></div>
            {loading ? <p>Cargando</p> : <Chat socket={socket} username={userName} room={roomId} /> }
            <div></div>
         </div>
      </>
   );
};

export default RoomId;
