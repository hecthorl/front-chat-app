import JoinroomBtn from 'components/buttons/JoinroomBtn'

const RoomItem = ({ roomRame }) => {
   return (
      <div className="py-2 flex justify-between px-1 items-center">
         <span>{roomRame}</span>
         <JoinroomBtn />
      </div>
   )
}

export default RoomItem
