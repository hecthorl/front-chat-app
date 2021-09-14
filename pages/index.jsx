import Head from "next/head";
import Welcome from "../components/Welcome";
import useUserAuth from "../hooks/useUserAuth";

export default function Home() {
   const { isUser } = useUserAuth();

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <Welcome />
      </>
   );
}
