import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import useStore from "store";
import OptionsBtn from "./OptionsBtn";

const NewMeetBtn = () => {
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
         <OptionsBtn />
      </div>
   );
};

export default NewMeetBtn;
