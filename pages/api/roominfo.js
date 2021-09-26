import { writeFile, readFile } from "fs";
import DBRooms from "../../lalaal.json";

const saveDB = (path, dataIncoming) => {
   readFile(path, (err, data) => {
      if (err) throw Error(err);
      const dataParsed = JSON.parse(data);
      const dataStringified = JSON.stringify([...dataParsed, dataIncoming]);
      writeFile(path, dataStringified, error => {
         if (err) throw Error(error);
      });
   });
};

export default async function (req, res) {
   if (req.method === "POST") {
      const parsedFromBody = JSON.parse(req.body);
      // el path ./lalaal.json no hace referencia a esto: /front/pages/roominfo.js
      // sino al fichero raiz: /front === ./

      saveDB(`${process.cwd()}/lalaal.json`, parsedFromBody);
      return res.status(201).end();
   }
   if (req.method === "GET") {
      const { roomId } = req.query;
      const roomData = DBRooms.filter(item => item.roomId === roomId);
      return res.status(200).send(roomData).end();
   }
}
