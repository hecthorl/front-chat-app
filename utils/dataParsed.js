export default function (data) {
   if (typeof data !== "object") {
      return JSON.parse(data);
   }
   return data;
}
