import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import useUserAuth from "../hooks/useUserAuth";
import App from "../components/App";
import Head from "next/head";
const Chat = () => {
   const { isUser } = useUserAuth();
   const { push } = useRouter();

   useEffect(() => {
      if (!isUser) push("/");
   }, []);

   return (
      <>
         <Head>
            <title>chat</title>
         </Head>
         <App />
      </>
   );
};

export default Chat;
