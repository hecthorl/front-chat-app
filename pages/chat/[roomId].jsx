import useUserAuth from "hooks/useUserAuth";
import { useRouter } from "next/router";
import useStore from "store";
import Head from "next/head";
import Header from "components/Header";
import { getSession } from "next-auth/client";
import Chat from "components/Chat";

const RoomId = () => {
   const { push } = useRouter();
   const { isUser } = useUserAuth();
   const socket = useStore(state => state.socket);
   const { roomId, userName, room_Name } = useStore(state => state.roomData);

   if (!isUser) return push("/");
   return (
      <>
         <Head>
            <title>Room: {room_Name}</title>
         </Head>
         <Header />
         <div className="w-full border-t border-gray-300 grid grid-cols-tres">
            <div></div>
            <Chat socket={socket} username={userName} room={roomId} />
            <div></div>
         </div>
      </>
   );
};

export default RoomId;

export const getServerSideProps = async context => {
   const session = await getSession(context);
   return {
      props: { session },
   };
};
