import Peer from 'simple-peer'

const addPeer = (incomingSignal, callerID, stream, socket) => {
   const peer = new Peer({
      initiator: false,
      trickle: false,
      stream
   })

   peer.on('signal', signal => {
      socket.emit('returning signal', { signal, callerID })
   })

   peer.signal(incomingSignal)

   return peer
}

export default addPeer
