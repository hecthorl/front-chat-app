import { useEffect, useRef, useState } from "react";
import ScrollComponent from "react-scroll-to-bottom";

const getTime = fecha => {
   return new Intl.DateTimeFormat(navigator.language, {
      day: "numeric",
      month: "short",
      year: "2-digit",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      hour: "2-digit",
   }).format(fecha);
};

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
         room,
         date: new Date().getTime(),
         msg: msgTrimed,
      };

      await socket.emit("new message", msgData);
      setMessages(prev => [...prev, msgData]);

      inputRef.current.value = "";
   };

   return (
      <div>
         <ScrollComponent className="Gaaa">
            {messages.map((item, id) => {
               const { username, date, msg } = item;
               return (
                  <div
                     style={{ border: "1px solid red", marginBottom: "5px" }}
                     key={id}
                  >
                     <p>{msg}</p>
                     <div>{username}</div>
                     <small>{getTime(date)}</small>
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
