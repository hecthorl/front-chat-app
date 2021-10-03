import useStore from 'store'
import RoomItem from './RoomItem'

const JoinRoom = () => {
   const allRooms = useStore(state => state.allRooms)
   return (
      <div className="md:w-1/2 w-full px-2">
         <h5 className="py-2 text-lg text-center">Salas disponibles</h5>
         <div className="divide-y h-[250px] overflow-y-auto text-center">
            {allRooms.length ? (
               allRooms.map(item => <RoomItem key={item._id} {...item} />)
            ) : (
               <div className="flex flex-col bg-yellow-50 h-full justify-center">
                  <span>No hay rooms</span>
                  <span>
                     pero puedes crear una{' '}
                     <span className="font-['sans-serif']">( ͡° ͜ʖ ͡°)</span>
                  </span>
               </div>
            )}
         </div>
      </div>
   )
}

export default JoinRoom
