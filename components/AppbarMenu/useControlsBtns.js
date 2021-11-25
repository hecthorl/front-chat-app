import { BiMicrophone } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiVideo } from 'react-icons/fi'
import { ImPhoneHangUp } from 'react-icons/im'
import { MdVideoLabel } from 'react-icons/md'

const useControlsBtns = () => {
   return [
      {
         icon: <BiMicrophone aria-hidden className="pointer-events-none" />,
         id: 0,
         action: () => console.log('no se manejar this')
      },
      {
         icon: <FiVideo aria-hidden className="pointer-events-none" />,
         id: 1,
         action: () => console.log('no se manejar this')
      },
      {
         icon: <MdVideoLabel aria-hidden className="pointer-events-none" />,
         id: 2,
         action: () => console.log('no se manejar this')
      },
      {
         icon: (
            <BsThreeDotsVertical aria-hidden className="pointer-events-none" />
         ),
         id: 3,
         action: () => console.log('no se manejar this')
      },
      {
         icon: <ImPhoneHangUp aria-hidden className="pointer-events-none" />,
         id: 4,
         action: () => console.log('no se manejar this')
      }
   ]
}

export default useControlsBtns
