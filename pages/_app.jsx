import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'

export default function App({
   Component,
   pageProps: { session, ...pageProps }
}) {
   return (
      <SessionProvider session={session}>
         <MantineProvider withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
         </MantineProvider>
      </SessionProvider>
   )
}
