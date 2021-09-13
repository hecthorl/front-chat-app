import { useSession } from "next-auth/client";

const useUserAuth = () => {
   const [data, loading] = useSession();
   return {
      isUser: Boolean(data),
      loading,
      userData: data,
   };
};

export default useUserAuth;
