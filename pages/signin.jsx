import { useEffect } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { getProviders, signIn } from "next-auth/client";
import useUserAuth from "hooks/useUserAuth";
import Head from "next/head";

const SignIn = ({ providers }) => {
   const { isUser } = useUserAuth();
   const { replace } = useRouter();
   useEffect(() => {
      if (isUser) replace("/");
   }, [isUser]);
   return (
      <>
         <Head>
            <title>SignIn</title>
         </Head>
         <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="mb-5 text-3xl">Google meet - Clone</h1>
            {Object.values(providers).map(provider => (
               <div key={provider.name}>
                  <button
                     className="flex text-xl items-center gap-x-2 border border-black hover:border-transparent hover:bg-black hover:text-white p-2 rounded transition-colors"
                     onClick={() => signIn(provider.id)}
                  >
                     <FcGoogle />
                     <span>Inicia sesión con {provider.name}</span>
                  </button>
               </div>
            ))}
         </div>
      </>
   );
};

export default SignIn;

export async function getServerSideProps() {
   const providers = await getProviders();
   return {
      props: { providers },
   };
}
