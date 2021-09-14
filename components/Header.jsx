import LoginBtn from "./LoginBtn";
import { MdInput } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { useSession } from "next-auth/client";
import SignoutBtn from "./SignoutBtn";
import CurrentDate from "./CurrentDate";
import Avatar from "./Avatar";

const Header = () => {
   const [session] = useSession();

   return (
      <header className="flex justify-between px-4 py-1 text-[#5f6368]">
         <div className="flex gap-x-7 text-lg items-center">
            <a href="/" className="flex">
               <img src="/meetIcon.png" alt="icon" className="w-8" />
               <span className="ml-2 text-xl">Google Meet</span>
            </a>
            {!session && (
               <>
                  <a href="">Resumen</a>
                  <a href="">Cómo funciona</a>
                  <a href="">Planes y precios</a>
               </>
            )}
         </div>
         <div className="flex gap-x-3 items-center">
            {/* <a href="" className="font-semibold">
                  Inciar sesión
               </a> */}
            {!session ? (
               <>
                  <button className="flex gap-x-3 border border-gray-300 hover:border-blue-600 px-5 py-3 items-center rounded">
                     <MdInput className="text-xl text-blue-600" />
                     <span className="text-blue-600 font-bold">
                        Unirse a una reunión
                     </span>
                  </button>
                  <LoginBtn />
               </>
            ) : (
               <>
                  <CurrentDate />
                  <div className="flex text-xl gap-x-2 mx-2">
                     <div>
                        <VscQuestion />
                     </div>
                     <div>
                        <IoChatboxEllipses />
                     </div>
                     <div>
                        <IoSettingsOutline />
                     </div>
                  </div>
                  <div className="flex items-center text-xl gap-x-4">
                     <div>
                        <IoApps />
                     </div>
                     <Avatar />
                  </div>
               </>
            )}
         </div>
      </header>
   );
};

export default Header;
