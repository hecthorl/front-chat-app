import { FaRegKeyboard } from "react-icons/fa";
import useUserAuth from "hooks/useUserAuth";
import Header from "./Header";
import NewMeetBtn from "./buttons/NewMeetBtn";
import LoginBtn from "./buttons/LoginBtn";
import SettingsTab from "./SettingsTab";

const Welcome = () => {
   const { isUser } = useUserAuth();
   return (
      <div>
         <Header />
         <section
            style={{ height: "calc(100vh - 58px)" }}
            className="flex items-center justify-center gap-x-10"
         >
            <div className="max-w-[616px]">
               <div className="mb-8">
                  <h1 className="text-5xl">
                     videollamadas premuin para todos.
                  </h1>
               </div>
               <p className="text-xl text-[#5f6368] mb-8">
                  Hemos rediseñado nuestro servicio de reuniones seguras de alta
                  calidad para empresas, Google Meet, para que todo el mundo
                  pueda usarlo en cualquier dispositivo.
               </p>
               <div className="flex pb-8 border-b border-gray-300 items-center gap-x-2">
                  {isUser ? <NewMeetBtn /> : <LoginBtn />}
                  <span>o</span>
                  <div>
                     <div className="relative h-12">
                        <input
                           type="text"
                           className="border border-gray-300 h-full focus:border-gray-600 pl-12 rounded"
                           placeholder="Código de reunión"
                        />
                        <FaRegKeyboard className="absolute top-3 text-2xl left-3" />
                     </div>
                  </div>
                  <button>unirse</button>
               </div>
               <div className="mt-8 text-lg space-x-1">
                  <span>¿No tienes una cuenta?</span>
                  <a href="/signin">Regístrate gratis</a>
               </div>
            </div>
            <div className="w-full max-w-[575px] p-5 rounded-md shadow-lg">
               <img src="/meet.png" alt="dummy" />
            </div>
            <SettingsTab />
         </section>
      </div>
   );
};

export default Welcome;
