import AppbarMenu from 'components/AppbarMenu'
import ChatAside from 'components/ChatAside'
import LHead from 'components/LHead'
import VideoGrid from 'components/VideoGrid'

export default function Videchat() {
   return (
      <>
         <LHead title="Video Chat" />
         <div className="w-screen h-screen bg-gray-600 flex flex-col">
            <div className="w-full flex-grow h-full flex p-1 gap-x-5 px-4">
               <VideoGrid />
               <ChatAside />
            </div>
            <AppbarMenu />
         </div>
      </>
   )
}
