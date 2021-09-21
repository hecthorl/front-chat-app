import { AiOutlineVideoCamera } from "react-icons/ai";
import { signIn } from "next-auth/client";

const LoginBtn = () => {
   const handleSingIn = () => signIn();
   return (
      <button
         onClick={handleSingIn}
         className="bg-blue-600 text-white flex items-center px-5 py-3 rounded gap-x-3"
      >
         <AiOutlineVideoCamera className="text-xl" />
         <span className="font-bold">Inciar una reunión</span>
      </button>
   );
};

export default LoginBtn;
