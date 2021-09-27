import dbConnect from "lib/dbconnect";
import Room from "models/Room";

const dataParsed = data => {
   if (typeof data !== "object") {
      return JSON.parse(data);
   }
   return data;
};

export default async function (req, res) {
   await dbConnect();
   if (req.method === "POST") {
      try {
         const data = dataParsed(req.body);
         const room = await Room.create(data);
         res.status(201).json({ success: true, data: room });
      } catch (error) {
         console.log(error);
         res.status(400).json({ success: false });
      }
   }
   if (req.method === "GET") {
      const { roomId } = req.query;
      try {
         const roomData = await Room.findOne({ roomId }).exec();
         res.status(200).json({ success: true, roomData });
      } catch (error) {
         console.log(error);
         res.status(400).json({ success: false });
      }
   }
}
