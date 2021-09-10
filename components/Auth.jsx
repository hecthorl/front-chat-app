import { useEffect } from "react";
import { DiGithubAlt } from "react-icons/di";
import { supabase } from "../utils/configSupabase";

const Auth = () => {
   useEffect(() => {
      const { data: listener } = supabase.auth.onAuthStateChange(
         async (event, session) => {
            console.log({ event, session });
         }
      );

      return () => listener.unsubscribe();
   }, []);

   return (
      <div>
         <button
            onClick={clickHandler}
            className="border border-transparent bg-yellow-400 max-w-[250px] w-full"
         >
            <DiGithubAlt />
            <span>Ingresa</span>
         </button>
         <button onClick={logOutHandler}>LogOut</button>
      </div>
   );
};

export default Auth;
