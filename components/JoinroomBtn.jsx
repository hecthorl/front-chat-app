import { IoEnterOutline } from "react-icons/io5";

const JoinroomBtn = () => {
   return (
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 gap-x-2 rounded">
         <IoEnterOutline />
         <span>Unirse</span>
      </button>
   );
};

export default JoinroomBtn;
