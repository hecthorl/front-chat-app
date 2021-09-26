import useUserAuth from "hooks/useUserAuth";
import { useRouter } from "next/router";
import useStore from "store";
import Header from "components/Header";
import { getSession } from "next-auth/client";
import Chat from "components/Chat";
import { useEffect } from "react";
import LHead from "components/LHead";

const RoomId = ({ roomInfo }) => {
   const { push } = useRouter();

   const { isUser } = useUserAuth();
   const socket = useStore(state => state.socket);
   const { roomId, roomName } = roomInfo;

   useEffect(() => {
      if (!isUser) push("/");
      socket.emit("join_channel", roomInfo);
   }, []);
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
   );
};

export default RoomId;

export const getServerSideProps = async context => {
   const { roomId } = context.params;
   const session = await getSession(context);
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(`${baseUrl}/api/roominfo?roomId=${roomId}`).catch(
      console.log
   );
   const [roomInfo] = await res.json();
   return {
      props: { session, roomInfo },
   };
};
