import JoinroomBtn from 'components/buttons/JoinroomBtn'

const RoomItem = ({ roomName }) => {
   return (
      <div className="py-2 flex justify-between px-1 items-center">
         <span>{roomName}</span>
         <JoinroomBtn />
      </div>
   )
}

export default RoomItem
