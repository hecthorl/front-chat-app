import { MdClose } from "react-icons/md";
import useStore from "store";
import RoomItem from "./RoomItem";
import CreateRoom from "./CreateRoom";

const SettingsTab = () => {
   const isSettingsOpen = useStore(state => state.isSettingsOpen);
   const closeSettings = useStore(state => state.closeSettings);

   if (!isSettingsOpen) return null;
   return (
      <div
         onClick={closeSettings}
         className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      >
         <div
            onClick={e => e.stopPropagation()}
            className="relative h-full max-h-[400px] flex items-center justify-center bg-white max-w-[700px] w-full border border-gray-300 rounded-xl"
         >
            <button
               onClick={closeSettings}
               className="absolute text-xl top-2 right-2"
            >
               <MdClose />
            </button>
            <div className="w-1/2 px-2">
               <h5 className="py-2 text-lg text-center">Salas disponibles</h5>
               <div className="divide-y h-[250px] overflow-y-auto text-center">
                  <RoomItem room_name="Sass" />
                  <RoomItem room_name="Sass" />
                  <RoomItem room_name="Sass" />
                  <RoomItem room_name="Sass" />
                  <RoomItem room_name="Sass" />
                  <RoomItem room_name="Sass" />
               </div>
            </div>
            <CreateRoom />
         </div>
      </div>
   );
};

export default SettingsTab;
