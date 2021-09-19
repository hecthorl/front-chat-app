import { BsPlusSquare } from "react-icons/bs";

const NewRoomBtn = () => {
   return (
      <button className="w-full flex items-center justify-center gap-x-3 bg-blue-600 rounded py-2 text-white">
         <BsPlusSquare className="text-xl" />
         <span>Crear sala nueva</span>
      </button>
   );
};

export default NewRoomBtn;
