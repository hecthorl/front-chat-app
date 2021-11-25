import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { FaUserShield } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import useStore from 'store'

const useToolsBtns = () => {
   return [
      {
         icon: (
            <BsFillChatLeftTextFill
               aria-hidden
               className="pointer-events-none"
            />
         ),
         id: 0,
         action: useStore(state => state.setToggleChat)
      },
      {
         icon: <FiUsers aria-hidden className="pointer-events-none" />,
         id: 1,
         action: () => console.log('no se manejar this')
      },
      {
         icon: (
            <AiOutlineInfoCircle aria-hidden className="pointer-events-none" />
         ),
         id: 3,
         action: () => console.log('no se manejar this')
      },
      {
         icon: <FaUserShield aria-hidden className="pointer-events-none" />,
         id: 5,
         action: () => console.log('no se manejar this')
      }
   ]
}

export default useToolsBtns
