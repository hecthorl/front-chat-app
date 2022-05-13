import NextHead from 'next/head'

export default function Head({ title, children, desc }) {
   return (
      <NextHead>
         <title>{title}</title>
         <meta name="description" content={desc} />
         <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         {children}
      </NextHead>
   )
}
