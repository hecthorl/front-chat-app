import { useEffect, useRef, useState } from "react";
import ScrollComponent from "react-scroll-to-bottom";
import getTime from "./utils/getTime";

const Chat = ({ socket, username, room }) => {
   const inputRef = useRef(null);
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      socket.on("msg recibido", data => {
         setMessages(prev => [...prev, data]);
      });
   }, [socket]);

   const msgSubmit = async event => {
      event.preventDefault();
      const msgTrimed = inputRef.current.value;
      if (!msgTrimed) return null;

      const msgData = {
         username,
         uid: socket.id,
         room,
         date: new Date().getTime(),
         msg: msgTrimed,
      };

      await socket.emit("new message", msgData);
      setMessages(prev => [...prev, msgData]);

      inputRef.current.value = "";
   };

   return (
      <div className="max-w-[500px] w-full ">
         <ScrollComponent scrollViewClassName="flex flex-col" className="h-96">
            {messages.map((item, id) => {
               const { username, date, msg, uid } = item;
               const { minuteSecondAndHour, yearDayAndMonth } = getTime(date);
               const isMe = uid === socket.id ? "bg-pink-600" : "bg-yellow-400";
               const isContainer = uid === socket.id && "self-end";
               return (
                  <div
                     className={isContainer + " max-w-[fit-content] mb-3"}
                     key={id}
                  >
                     <div className={isMe + " rounded-md"}>
                        <p>{msg}</p>
                        <div>{username}</div>
                     </div>
                     <small className="text-white space-x-2">
                        {yearDayAndMonth}
                        <span>·</span>
                        {minuteSecondAndHour}
                     </small>
                  </div>
               );
            })}
         </ScrollComponent>
         <form onSubmit={msgSubmit}>
            <input
               autoComplete="off"
               autoFocus
               ref={inputRef}
               type="text"
               placeholder="Type something"
               name="message-text"
            />
            <button>Send</button>
         </form>
      </div>
   );
};

export default Chat;
