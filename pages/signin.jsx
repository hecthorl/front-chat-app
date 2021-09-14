import { getProviders, signIn } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";

const SignIn = ({ providers }) => {
   return (
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
   );
};

export default SignIn;

export async function getServerSideProps() {
   const providers = await getProviders();
   return {
      props: { providers },
   };
}
