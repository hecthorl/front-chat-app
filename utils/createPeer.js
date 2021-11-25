import Peer from 'simple-peer'

const createPeer = (userToSignal, callerID, stream, socket) => {
   const peer = new Peer({
      initiator: true,
      trickle: false,
      stream
   })

   peer.on('signal', signal => {
      socket.emit('sending signal', {
         userToSignal,
         callerID,
         signal
      })
   })

   return peer
}

export default createPeer
