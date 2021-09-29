import useUserAuth from 'hooks/useUserAuth'
import { nanoid } from 'nanoid'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { BsPlusSquare } from 'react-icons/bs'
import useStore from 'store'

const NewRoomBtn = () => {
   const toggleInput = useStore(state => state.toggleInput)
   const setLoadingNewRoom = useStore(state => state.setLoadingNewRoom)
   const loadingNewRoom = useStore(state => state.loadingNewRoom)
   const input = useStore(state => state.input)
   const setRoomData = useStore(state => state.setRoomData)
   const roomNameTrimed = input.trim()
   const isDisabled = !roomNameTrimed.length || loadingNewRoom
   const { userData } = useUserAuth()
   const { push } = useRouter()

   const handleClick = async () => {
      setLoadingNewRoom(true)
      const room = {
         isPrivate: toggleInput,
         roomName: roomNameTrimed,
         roomId: nanoid(),
         userName: userData.user.name
      }

      const opt = {
         body: JSON.stringify(room),
         method: 'POST',
         headers: {
            'Content-Type': 'application/json; charset=UTF-8'
         }
      }
      const response = await fetch('/api/roominfo', opt)

      if (response.status !== 201) {
         setLoadingNewRoom(false)
         toast.error('Falló al crear Room', { duration: 5e3 })
         return
      }
      push(`/chat/${room.roomId}`).then(algo => setLoadingNewRoom(false))
      setRoomData(room)
   }

   return (
      <button
         onClick={handleClick}
         disabled={isDisabled}
         className="w-full flex items-center justify-center gap-x-3 bg-blue-500 hover:bg-blue-600 rounded py-2 text-white transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
         {loadingNewRoom ? (
            <div className="h-5 w-5 animate-spin rounded-full bg-transparent loading"></div>
         ) : (
            <>
               <BsPlusSquare className="text-xl" />
               <span>Crear sala nueva</span>
            </>
         )}
      </button>
   )
}

export default NewRoomBtn
