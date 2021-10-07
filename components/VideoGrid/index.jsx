const VideoGrid = () => {
   const videoStreams = []
   return (
      <div className="flex-grow grid place-content-center">
         {videoStreams.length ? (
            <video className="w-full" muted autoPlay />
         ) : (
            <div> No hay video </div>
         )}
      </div>
   )
}

export default VideoGrid
