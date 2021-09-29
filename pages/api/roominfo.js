import dbConnect from 'lib/dbconnect'
import dataParsed from 'utils/dataParsed'
import Room from 'models/Room'

export default async function (req, res) {
   await dbConnect()

   switch (req.method) {
      case 'GET': {
         const { roomId } = req.query
         if (!roomId) return res.status(400).json({ success: false })
         const roomData = await Room.findOne({ roomId }).exec()
         res.status(200).json({ success: true, roomData })
         break
      }

      case 'POST':
         try {
            const data = dataParsed(req.body)
            await Room.create(data)
            res.status(201).json({ success: true })
         } catch (error) {
            res.status(400).json({ success: false })
            throw Error(error)
         }
         break
      default:
         res.status(405).json({ error: 'Internal Error' })
         throw Error('Method not allowed')
   }
}
