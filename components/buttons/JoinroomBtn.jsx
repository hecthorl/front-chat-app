import { IoEnterOutline } from 'react-icons/io5'
import Link from 'next/link'
const JoinroomBtn = ({ roomId }) => {
   return (
      <Link href={`/chat/${roomId}`}>
         <a className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 gap-x-2 rounded">
            <IoEnterOutline />
            <span>Unirse</span>
         </a>
      </Link>
   )
}

export default JoinroomBtn
