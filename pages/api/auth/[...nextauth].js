import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET_KEY
      })
   ],
   jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
   },
   pages: {
      signIn: '/signin'
   },
   secret: process.env.NEXTAUTH_SECRET
})
