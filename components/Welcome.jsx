import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdInput } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";

const Welcome = () => {
   return (
      <div>
         <header className="flex justify-between px-4 py-1 text-[#5f6368]">
            <div className="flex gap-x-7 text-lg items-center">
               <a href="/" className="flex">
                  <img src="/meetIcon.png" alt="icon" className="w-8" />
                  <span className="ml-2 text-xl">Google Meet</span>
               </a>
               <a href="">Resumen</a>
               <a href="">Cómo funciona</a>
               <a href="">Planes y precios</a>
            </div>
            <div className="flex gap-x-3 items-center">
               <a href="" className="font-semibold">
                  Inciar sesión
               </a>
               <button className="flex gap-x-3 border border-gray-300 hover:border-blue-600 px-5 py-3 items-center rounded">
                  <MdInput className="text-xl text-blue-600" />
                  <span className="text-blue-600 font-bold">
                     Unirse a una reunión
                  </span>
               </button>
               <button className="bg-blue-600 text-white flex items-center px-5 py-3 rounded gap-x-3">
                  <AiOutlineVideoCamera className="text-xl" />
                  <span className="font-bold">Inciar una reunión</span>
               </button>
            </div>
         </header>
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
                  <button className="bg-blue-600 text-white flex items-center px-5 py-3 rounded gap-x-3">
                     <AiOutlineVideoCamera className="text-xl" />
                     <span className="font-bold">Inciar una reunión</span>
                  </button>
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
                  <a href="">Regístrate gratis</a>
               </div>
            </div>
            <div className="w-full max-w-[575px] p-5 rounded-md shadow-lg">
               <img src="/meet.png" alt="" />
            </div>
         </section>
      </div>
   );
};

export default Welcome;
