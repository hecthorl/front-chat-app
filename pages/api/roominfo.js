import { writeFile, readFile } from "fs";
import jjj from "../../lalaal.json";

const saveDB = (path, dataIncoming) => {
   readFile(path, (err, data) => {
      if (err) throw Error(err);
      const dataParsed = JSON.parse(data);
      const dataStringified = JSON.stringify([...dataParsed, dataIncoming]);
      // prettier-ignore
      writeFile(path, dataStringified, error => {
         if (err) throw Error(error);
      });
   });
};

export default async function (req, res) {
   if (req.method === "POST") {
      const parsedFromBody = JSON.parse(req.body);
      saveDB("./lalaal.json", parsedFromBody);
      return res.status(203);
   }
   if (req.method === "GET") {
      const { roomId } = req.query;
      const roomData = jjj.filter(item => item.roomId === roomId);
      return res.status(200).send(roomData);
   }
}