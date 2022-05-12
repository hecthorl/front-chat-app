import { MdClose } from 'react-icons/md'
import useStore from 'store'
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'

const SettingsTab = () => {
   const isSettingsOpen = useStore(state => state.isSettingsOpen)
   const closeSettings = useStore(state => state.closeSettings)

   if (!isSettingsOpen) return null
   return (
      <div
         onClick={closeSettings}
         className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      >
         <div
            onClick={e => e.stopPropagation()}
            className="flex-col relative py-4 h-[fit-content] min-h-[400px] flex items-center justify-center md:flex-row bg-white max-w-[700px] w-full border border-gray-300 rounded-xl"
         >
            {/* <Toaster /> */}
            <button
               onClick={closeSettings}
               className="absolute text-xl top-2 right-2"
            >
               <MdClose />
            </button>
            <JoinRoom />
            <div className="h-[1px] w-full bg-gray-300 my-2 md:hidden"></div>
            <CreateRoom />
         </div>
      </div>
   )
}

export default SettingsTab
