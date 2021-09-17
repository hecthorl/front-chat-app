import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import App from "components/App";
import useUserAuth from "hooks/useUserAuth";

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
