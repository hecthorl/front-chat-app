import useUserAuth from "hooks/useUserAuth";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { BsPlusSquare } from "react-icons/bs";
import useStore from "store";

const NewRoomBtn = () => {
   const toggleInput = useStore(state => state.toggleInput);
   // const socket = useStore(state => state.socket);
   const input = useStore(state => state.input);
   const setRoomData = useStore(state => state.setRoomData);
   const roomNameTrimed = input.trim();
   const isDisabled = !roomNameTrimed.length;
   const { userData } = useUserAuth();
   const { push } = useRouter();

   const handleClick = () => {
      try {
         const room = {
            isPrivate: toggleInput,
            roomName: input,
            roomId: nanoid(),
            userName: userData.user.name,
         };
         fetch("/api/roominfo", {
            body: JSON.stringify(room),
            method: "POST",
            headers: {
               "Content-Type": "text/html",
            },
         }).then(algo => {
            console.log({ statys: algo.status });
         });
         push(`chat/${room.roomId}`);
         setRoomData(room);
      } catch (err) {
         console.log(err);
      }
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
