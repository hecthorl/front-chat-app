import { useSession, signIn, signOut } from 'next-auth/react'

export default function useUserAuth() {
   const { data } = useSession()
   const userData = {
      name: data?.user?.name || null,
      image: data?.user?.image || null,
      email: data?.user?.email || null
   }
   return { userData, signIn, signOut }
}
