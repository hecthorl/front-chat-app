import { RiChatNewLine, RiVideoAddLine } from 'react-icons/ri'
import useStore from 'store'

const OptionsBtn = () => {
   const isPopup = useStore(state => state.isPopup)
   const openSettings = useStore(state => state.openSettings)
   if (!isPopup) return null
   return (
      <div className="absolute top-0 -left-2 text-lg md:text-xl text-black w-[300px] md:w-[328px] z-10 bg-white shdwn py-2">
         <button className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors">
            <RiVideoAddLine />
            <span>Iniciar una sala de videochat</span>
         </button>
         <button
            onClick={openSettings}
            className="w-full flex items-center gap-x-6 px-2 py-3 hover:text-white hover:bg-black transition-colors"
         >
            <RiChatNewLine />
            <span>Iniciar una sala de chat</span>
         </button>
      </div>
   )
}

export default OptionsBtn
