import useUserAuth from "hooks/useUserAuth";
import { useEffect, useRef } from "react";
import ScrollComponent from "react-scroll-to-bottom";
import useStore from "store";
import getTime from "utils/getTime";

const Chat = ({ socket, username, room }) => {
   const inputRef = useRef(null);
   const { userData } = useUserAuth();
   const setMessages = useStore(state => state.setMessages);
   const messages = useStore(state => state.messages);

   useEffect(() => {
      socket.on("msg recibido", setMessages);
   }, [socket]);

   const msgSubmit = async event => {
      event.preventDefault();
      const msgTrimed = inputRef.current.value.trim();
      if (!msgTrimed) return null;

      const msgData = {
         username,
         uid: socket.id,
         room,
         date: new Date().getTime(),
         msg: msgTrimed,
      };

      await socket.emit("new message", msgData);
      setMessages(msgData);

      inputRef.current.value = "";
   };

   return (
      <div className="border-l border-r border-gray-300 pb-2">
         <ScrollComponent
            scrollViewClassName="flex flex-col scrollbar-thin scrollbar-thumb-blue-700 hover:scrollbar-thumb-blue-500 gap-y-5"
            className="viewport-h"
         >
            {messages.map(({ date, msg }, id) => {
               const { minuteSecondAndHour, yearDayAndMonth } = getTime(date);
               // const isMe = uid === socket.id ? "bg-pink-600" : "bg-yellow-400";
               // const isContainer = uid === socket.id && "self-end";
               return (
                  <div className="w-full flex gap-x-3 pl-2 mt-2" key={id}>
                     <img
                        src={userData.user.image}
                        alt="sadasd"
                        className="rounded-full w-11 h-11"
                     />
                     <div>
                        <div className="flex items-center gap-x-3">
                           <p className="font-semibold">{username}</p>
                           <small className="text-gray-400">
                              {yearDayAndMonth}
                              <span className="mx-2">·</span>
                              {minuteSecondAndHour}
                           </small>
                        </div>
                        <p className="on-break">{msg}</p>
                     </div>
                  </div>
               );
            })}
         </ScrollComponent>
         <form onSubmit={msgSubmit} className="mx-2">
            <input
               autoComplete="off"
               autoFocus
               ref={inputRef}
               type="text"
               placeholder="Type something and then press Enter"
               name="message-text"
               className="w-full text-black px-3 py-1 rounded-md border border-blue-600"
            />
         </form>
      </div>
   );
};

export default Chat;
