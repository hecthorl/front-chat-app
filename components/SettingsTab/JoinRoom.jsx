import useStore from 'store'
import RoomItem from './RoomItem'

const JoinRoom = () => {
   const allRooms = useStore(state => state.allRooms)
   return (
      <div className="md:w-1/2 w-full px-2">
         <h5 className="py-2 text-lg text-center">Salas disponibles</h5>
         <div className="divide-y h-[250px] overflow-y-auto text-center">
            {allRooms.map(item => (
               <RoomItem key={item._id} {...item} />
            ))}
         </div>
      </div>
   )
}

export default JoinRoom
