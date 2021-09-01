import { useRef, useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";

const url = process.env.REACT_APP_URL || "http://localhost:4000";

const socket = io(url);

const App = () => {
   const formRef = useRef(null);
   const [userData, setUserData] = useState({});

   socket.on("join_channel", data => {
      setUserData({
         userName: data.userName,
         room: data.room,
      });
   });

   const joinRoom = event => {
      event.preventDefault();

      const formData = new FormData(formRef.current);

      const formInput = inputName => formData.get(inputName);
      const valTrimed = value => value.trim();

      const userName = formInput("username");
      const room = formInput("room");

      if (!valTrimed(userName) || !valTrimed(room)) return;

      socket.emit("join_channel", { userName, room });

      formRef.current.childNodes.forEach(elemento => {
         if (elemento.localName === "div") {
            elemento.childNodes.forEach(item => {
               if (item.localName === "input") item.value = "";
            });
         }
      });
   };

   return (
      <div className="App">
         <h1>Gaaaaaaaaaa</h1>
         {Object.keys(userData).length === 0 ? (
            <form ref={formRef} onSubmit={joinRoom}>
               <div>
                  <span>username</span>
                  <input
                     autoComplete="off"
                     type="text"
                     name="username"
                     autoFocus
                  />
               </div>
               <div>
                  <span>room</span>
                  <input autoComplete="off" type="text" name="room" />
               </div>
               <button>Enter</button>
            </form>
         ) : (
            <Chat
               socket={socket}
               username={userData?.userName}
               room={userData?.room}
            />
         )}
      </div>
   );
};

export default App;
