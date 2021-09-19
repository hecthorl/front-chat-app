import useUserAuth from "hooks/useUserAuth";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { BsPlusSquare } from "react-icons/bs";
import { io } from "socket.io-client";
import useStore from "store";

const url = process.env.NEXT_PUBLIC_URL_BACKEND || "http://localhost:4000";
const socket = io(url);

const NewRoomBtn = () => {
   const toggleInput = useStore(state => state.toggleInput);
   const input = useStore(state => state.input);
   const setRoomData = useStore(state => state.setRoomData);
   const romNameTrimed = input.trim();
   const isDisabled = !romNameTrimed.length;
   const { userData } = useUserAuth();
   const { push } = useRouter();

   const handleClick = () => {
      const room = {
         isPrivate: toggleInput,
         room_Name: input,
         roomId: nanoid(),
         userName: userData.user.name,
      };
      socket.emit("join_channel", room);
      push(`chat/${room.roomId}`);
      setRoomData(room);
   };

   return (
      <button
         onClick={handleClick}
         disabled={isDisabled}
         className="w-full flex items-center justify-center gap-x-3 bg-blue-500 hover:bg-blue-600 rounded py-2 text-white transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
         <BsPlusSquare className="text-xl" />
         <span>Crear sala nueva</span>
      </button>
   );
};

export default NewRoomBtn;
