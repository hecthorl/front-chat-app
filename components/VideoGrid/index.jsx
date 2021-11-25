import useStore from 'store'

const VideoGrid = () => {
   const currentVideoRef = useStore(state => state.currentVideoRef)
   const peers = useStore(state => state.peers)
   console.log({ peers })
   return (
      <div className="flex-grow grid place-content-center">
         <video
            ref={currentVideoRef}
            playsInline
            autoPlay
            muted
            className="w-full h-full transform scale-x-[-1]"
         />
      </div>
   )
}

export default VideoGrid
