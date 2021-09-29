import { Switch } from '@headlessui/react'
import useStore from 'store'

const Toggle = () => {
   const toggleInput = useStore(state => state.toggleInput)
   const setToggleInput = useStore(state => state.setToggleInput)
   return (
      <Switch.Group>
         <div className="flex items-center">
            <Switch.Label className="mr-4">Private Room</Switch.Label>
            <Switch
               checked={toggleInput}
               onChange={setToggleInput}
               className={`${
                  toggleInput ? 'bg-blue-600' : 'bg-gray-200'
               } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
               <span
                  className={`${
                     toggleInput ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
               />
            </Switch>
         </div>
      </Switch.Group>
   )
}

export default Toggle
