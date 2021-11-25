import useControlsBtns from './useControlsBtns'
import useToolsBtns from './useToolsBtns'

const AppbarMenu = () => {
   const toolsBtns = useToolsBtns()
   const controllsBtns = useControlsBtns()
   return (
      <div className="w-full h-24 flex items-center justify-between px-6">
         <div>Hora y código</div>
         <div className="flex gap-x-5">
            {controllsBtns.map(({ action, icon, id }) => (
               <button
                  className="rounded-full text-2xl p-2 bg-gray-800 text-white"
                  key={id}
                  onClick={() => action()}
               >
                  {icon}
               </button>
            ))}
         </div>
         <div>
            {toolsBtns.map(({ action, icon, id }) => (
               <button
                  key={id}
                  className="bg-white bg-opacity-0 text-xl text-white hover:bg-opacity-20 p-3 rounded-full"
                  onClick={() => action()}
               >
                  {icon}
               </button>
            ))}
         </div>
      </div>
   )
}

export default AppbarMenu
