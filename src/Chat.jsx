import { useEffect, useRef, useState } from "react";
import ScrollComponent from "react-scroll-to-bottom";

const getTime = fecha => {
   const yearDayAndMonth = new Intl.DateTimeFormat(navigator.language, {
      day: "numeric",
      month: "short",
      year: "2-digit",
   }).format(fecha);
   const minuteSecondAndHour = new Intl.DateTimeFormat(navigator.language, {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      hourCycle: "h12",
   }).format(fecha);
   return { yearDayAndMonth, minuteSecondAndHour };
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
         <ScrollComponent className="">
            {messages.map((item, id) => {
               const { username, date, msg } = item;
               const { minuteSecondAndHour, yearDayAndMonth } = getTime(date);
               return (
                  <div
                     style={{ border: "1px solid red", marginBottom: "5px" }}
                     key={id}
                  >
                     <p>{msg}</p>
                     <div>{username}</div>
                     <small>
                        {yearDayAndMonth}
                        <span style={{ margin: "0 5px" }}>·</span>
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
