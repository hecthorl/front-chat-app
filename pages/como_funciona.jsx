import Header from "components/Header";
import IconBrand from "components/IconBrand";
import Head from "next/head";

const ComoFunciona = () => {
   return (
      <>
         <Head>
            <title>Cómo funciona</title>
            <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         </Head>
         <Header />
         <div className="flex">
            <h1>dasds</h1>
            <div className="w-20 bg-blue-600 p-1">
               <IconBrand />
            </div>
         </div>
      </>
   );
};

export default ComoFunciona;
