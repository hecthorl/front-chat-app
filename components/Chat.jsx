import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import useStore from "store";
import ChatTimleline from "./ChatTimleline";

const ScrollComponent = dynamic(() => import("react-scroll-to-bottom"), {
   ssr: false,
   loading: () => <div className="viewport-h"></div>,
});

const Chat = ({ socket, username, room }) => {
   const inputRef = useRef(null);
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
            <ChatTimleline messages={messages} />
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
