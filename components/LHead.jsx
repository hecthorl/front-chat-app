import Head from "next/head";

const LHead = ({ title }) => {
   return (
      <Head>
         <title>{title}</title>
         <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
      </Head>
   );
};

export default LHead;
