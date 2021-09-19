import { MdClose } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import useStore from "store";
import Toggle from "./Toggle";
import Input from "./Input";
import NewRoomBtn from "./NewRoomBtn";

const SettingTab = () => {
   const isSettingsOpen = useStore(state => state.isSettingsOpen);
   const closeSettings = useStore(state => state.closeSettings);

   if (!isSettingsOpen) return null;
   return (
      <div
         onClick={e => {
            e.preventDefault();
         }}
         className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      >
         <div className="relative h-full max-h-[400px] flex items-center justify-center bg-white max-w-[600px] w-full border border-gray-300 rounded-xl">
            <button
               onClick={closeSettings}
               className="absolute text-xl top-2 right-2"
            >
               <MdClose />
            </button>
            <div className="border border-black w-1/2">
               <h5 className="py-2">Salas disponibles</h5>
               <div className="divide-y h-[250px] overflow-y-auto text-center">
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
                  <div className="py-2 flex justify-between px-1">
                     <span>sala_1</span>
                     <button>Unirse</button>
                  </div>
               </div>
            </div>
            <div className="w-1/2 flex justify-center flex-col h-full px-5 space-y-14">
               <h3 className="text-lg text-center">Crear Nueva Sala</h3>
               <Input />
               <Toggle />
               <NewRoomBtn />
            </div>
         </div>
      </div>
   );
};

export default SettingTab;
