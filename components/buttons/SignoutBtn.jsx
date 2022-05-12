import { signOut } from 'next-auth/react'

const SignoutBtn = () => {
   const handleSignOut = () => signOut()
   return (
      <button
         className="border border-gray-400 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
         onClick={handleSignOut}
      >
         Cerrar Sessión
      </button>
   )
}

export default SignoutBtn
