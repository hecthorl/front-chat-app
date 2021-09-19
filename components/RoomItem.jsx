import JoinroomBtn from "./JoinroomBtn";

const RoomItem = ({ room_name }) => {
   return (
      <div className="py-2 flex justify-between px-1 items-center">
         <span>{room_name}</span>
         <JoinroomBtn />
      </div>
   );
};

export default RoomItem;
