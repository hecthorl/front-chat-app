import { FaRegKeyboard } from 'react-icons/fa'
import useUserAuth from 'hooks/useUserAuth'
import Header from './Header'
import NewMeetBtn from './buttons/NewMeetBtn'
import LoginBtn from './buttons/LoginBtn'
import SettingsTab from './SettingsTab'

const Welcome = () => {
   const { isUser } = useUserAuth()
   return (
      <>
         <Header />
         <section
            style={{ minHeight: 'calc(100vh - 69px)' }}
            className="flex px-4 items-center flex-col md:flex-row justify-center gap-x-10"
         >
            <div className="max-w-[616px]">
               <div className="md:mb-8 my-10">
                  <h1 className="text-4xl md:text-5xl text-center">
                     Videollamadas Premium. Ahora gratis para todos.
                  </h1>
               </div>
               <p className="text-xl text-[#5f6368] mb-8 text-center">
                  Hemos rediseñado nuestro servicio de reuniones seguras de alta
                  calidad para empresas, Google Meet, para que todo el mundo
                  pueda usarlo en cualquier dispositivo.
               </p>
               <div className="flex flex-col md:flex-row items-start pb-8 border-b border-gray-300 md:items-center gap-5 md:gap-x-2">
                  {isUser ? <NewMeetBtn /> : <LoginBtn />}
                  <div>
                     <div className="relative h-12">
                        <input
                           type="text"
                           className="border border-gray-300 h-full focus:border-gray-600 pl-12 rounded"
                           placeholder="Código de reunión"
                        />
                        <FaRegKeyboard
                           aria-hidden={true}
                           className="absolute top-3 text-2xl left-3"
                        />
                     </div>
                  </div>
                  <button>unirse</button>
               </div>
               <div className="mt-8 text-lg space-x-1">
                  <span>¿No tienes una cuenta?</span>
                  <a href="/signin">Regístrate gratis</a>
               </div>
            </div>
            <div className="w-full max-w-[575px] py-5 md:p-5 rounded-md shadow-lg">
               <img src="/meet.png" alt="dummy" />
            </div>
            <SettingsTab />
         </section>
      </>
   )
}

export default Welcome
