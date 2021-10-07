import { BsFillChatLeftTextFill } from 'react-icons/bs'
import useStore from 'store'

const AppbarMenu = () => {
   const setToggleChat = useStore(state => state.setToggleChat)
   return (
      <div className="w-full h-24 flex items-center justify-between px-8">
         <div>Hora y código</div>
         <div>botones de control</div>
         <div>
            <button
               onClick={setToggleChat}
               className="bg-white bg-opacity-0 text-xl text-white hover:bg-opacity-20 p-2 rounded-full"
            >
               <BsFillChatLeftTextFill
                  aria-hidden
                  className="pointer-events-none"
               />
            </button>
         </div>
      </div>
   )
}

export default AppbarMenu
