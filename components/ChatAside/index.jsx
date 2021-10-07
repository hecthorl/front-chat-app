import useStore from 'store'
import { GrClose } from 'react-icons/gr'
import { AiOutlineSend } from 'react-icons/ai'

const ChatAside = () => {
   const toggleChat = useStore(state => state.toggleChat)
   const closeToggleChat = useStore(state => state.closeToggleChat)
   if (!toggleChat) return null
   return (
      <div className="max-w-[360px] w-full">
         <div className="h-full bg-white rounded-xl px-2 flex-col flex">
            <div className="flex pt-3 justify-between ">
               <h4 className="text-xl">Mensaje de la llamada</h4>
               <button onClick={closeToggleChat} className="">
                  <GrClose />
               </button>
            </div>
            <div className="flex-grow"></div>
            <form className="pb-4">
               <div className="relative">
                  <input
                     type="text"
                     className="rounded-full bg-gray-100 w-full py-2 pl-4 pr-10"
                  />
                  <AiOutlineSend className="absolute right-3 top-[9px] text-xl text-current" />
               </div>
            </form>
         </div>
      </div>
   )
}

export default ChatAside
