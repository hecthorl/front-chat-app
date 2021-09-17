import Link from "next/link";
import { RiChatNewLine, RiVideoAddLine } from "react-icons/ri";
import useStore from "store";

const OptionsBtn = () => {
   const isPopup = useStore(state => state.isPopup);
   if (!isPopup) return null;
   return (
      <div className="absolute top-0 text-xl text-black w-[328px] z-10 bg-white shadow-lg py-2">
         <button className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors">
            <RiVideoAddLine />
            <span>Iniciar una sala de videochat</span>
         </button>
         <Link href="/chat">
            <a className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors">
               <RiChatNewLine />
               <span>Iniciar una sala de chat</span>
            </a>
         </Link>
         {/* <button className="w-full flex items-center gap-x-2 px-2 py-3 hover:text-white hover:bg-black transition-colors">
                  Aquella manera
               </button> */}
      </div>
   );
};

export default OptionsBtn;
