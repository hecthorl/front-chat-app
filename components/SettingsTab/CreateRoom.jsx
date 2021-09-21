import NewRoomBtn from "components/buttons/NewRoomBtn";
import Input from "./Input";
import Toggle from "./Toggle";

const CreateRoom = () => {
   return (
      <div className="w-1/2 border-l border-gray-300 flex justify-center flex-col h-full px-5 space-y-14">
         <h3 className="text-lg text-center">Crear Nueva Sala</h3>
         <Input />
         <Toggle />
         <NewRoomBtn />
      </div>
   );
};

export default CreateRoom;
