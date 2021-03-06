import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

Document.getInitialProps = createGetInitialProps()

export default class _Document extends Document {
   render() {
      return (
         <Html>
            <Head />
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}
