import Head from "next/head";
import Welcome from "../components/Welcome";

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <Welcome />
      </>
   );
}
