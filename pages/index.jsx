import Head from "next/head";
import Welcome from "components/Welcome";

export default function Home() {
   return (
      <>
         <Head>
            <title>Google-meet Clone</title>
            <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         </Head>
         <Welcome />
      </>
   );
}
