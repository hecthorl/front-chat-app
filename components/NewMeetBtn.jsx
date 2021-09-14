import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiChatNewLine } from "react-icons/ri";
import { RiVideoAddLine } from "react-icons/ri";
import useStore from "../store";

const NewMeetBtn = () => {
   const isPopup = useStore(state => state.isPopup);
   const openPopup = useStore(state => state.openPopup);
   const closePopup = useStore(state => state.closePopup);
   document.addEventListener("click", closePopup);
   return (
      <div className="relative">
         <button
            onClick={e => {
               e.stopPropagation();
               openPopup();
            }}
            className="bg-blue-600 text-white flex items-center px-5 py-3 rounded gap-x-3"
         >
            <AiOutlineVideoCameraAdd />
            <span>Nueva reunión</span>
         </button>
         {isPopup && (
            <div className="absolute top-0 text-xl text-black w-[328px] z-10 bg-white shadow-lg py-2">
               <button className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors">
                  <RiVideoAddLine />
                  <span>Iniciar una sala de videochat</span>
               </button>
               <button className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors">
                  <RiChatNewLine />
                  <span>Iniciar una sala de chat</span>
               </button>
               {/* <button className="w-full flex items-center gap-x-2 px-2 py-3 hover:text-white hover:bg-black transition-colors">
                  Aquella manera
               </button> */}
            </div>
         )}
      </div>
   );
};

export default NewMeetBtn;
