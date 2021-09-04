import { useRef, useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";

const url = process.env.REACT_APP_URL_BACKEND || "http://localhost:4000";

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
      <div className="bg-purple-500 flex justify-center items-center w-screen flex-col h-screen">
         <h1 className="text-2xl text-black">{userData?.room || "Chat"}</h1>
         {Object.keys(userData).length === 0 ? (
            <form
               ref={formRef}
               onSubmit={joinRoom}
               className="space-y-4 max-w-[500px] w-full"
            >
               <div className="flex justify-between">
                  <span className="text-white text-lg">username</span>
                  <input
                     autoComplete="off"
                     type="text"
                     name="username"
                     autoFocus
                     className="rounded bg-purple-400 text-white"
                  />
               </div>
               <div className="flex justify-between ">
                  <span className="text-white text-lg">room</span>
                  <input
                     autoComplete="off"
                     type="text"
                     name="room"
                     className="rounded bg-purple-400 text-white"
                  />
               </div>
               <button className="w-full bg-green-100 bg-opacity-30">
                  Enter
               </button>
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
