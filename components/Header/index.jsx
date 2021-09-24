import dynamic from "next/dynamic";
import { MdInput } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { useSession } from "next-auth/client";
import LoginBtn from "components/buttons/LoginBtn";
import Avatar from "./Avatar";
import ProfilePopup from "./ProfilePopup";

const CurrentDate = dynamic(() => import("./CurrentDate"), { ssr: false });

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
                  <a href="" className="hidden">
                     Resumen
                  </a>
                  <a href="" className="hidden">
                     Cómo funciona
                  </a>
                  <a href="" className="hidden">
                     Planes y precios
                  </a>
               </>
            )}
         </div>
         <div className="flex gap-x-3 items-center">
            {!session ? (
               <>
                  <a href="/signin" className="hidden font-semibold">
                     Inciar sesión
                  </a>
                  <button className="hidden md:flex gap-x-3 border border-gray-300 hover:border-blue-600 px-5 py-3 items-center rounded">
                     <MdInput className="text-xl text-blue-600" />
                     <span className="hidden text-blue-600 font-bold">
                        Unirse a una reunión
                     </span>
                  </button>
                  <div className="hidden md:block">
                     <LoginBtn />
                  </div>
               </>
            ) : (
               <>
                  <div className="hidden sm:flex items-center text-xl gap-x-3 mx-4">
                     <CurrentDate />
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
                     <IoApps />
                     <div className="relative flex items-center">
                        <Avatar />
                        <ProfilePopup />
                     </div>
                  </div>
               </>
            )}
         </div>
      </header>
   );
};

export default Header;
