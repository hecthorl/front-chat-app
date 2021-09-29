import { Provider } from 'next-auth/client'
import '../styles/global.css'

export default function MyApp({
   Component,
   pageProps: { session, ...pageProps }
}) {
   return (
      <Provider session={session}>
         <Component {...pageProps} />
      </Provider>
   )
}
