import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
// import CredentialsProvider from 'next-auth/providers/credentials'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@/server/db/db'

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'Ov23liLpAE4Exufrw6KP',
      clientSecret: '892539ef9029d3dee66a6ba92c45e148f35865c6'
      // clientId: process.env.GITHUB_ID!,
      // clientSecret: process.env.GITHUB_SECRET!
    }),
    GitlabProvider({
      clientId: 'f408d080219c1ddd3000aa8a76603d884f57a8e8a9c0deb413c18e0636bdd247',
      clientSecret: 'gloas-0c1942aaaa6a8ab0e6b3d34e92aa0a8671327144a432cd14b5dccf8fb792e564'
    })
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: 'Credentials',
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: { label: 'Username', type: 'text', placeholder: 'Jsmith' },
    //     password: { label: 'Password', type: 'password' }
    //   },
    //   async authorize(credentials, req) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //     if (!credentials) {
    //       return null
    //     }
    //
    //     const { username, password } = credentials
    //
    //     if (username !== 'Jsmith' || password !== '123456') {
    //       return null
    //     }
    //     return {
    //       id: '1',
    //       ...credentials
    //     }
    //
    //     // const res = await fetch('/your/endpoint', {
    //     //   method: 'POST',
    //     //   body: JSON.stringify(credentials),
    //     //   headers: { 'Content-Type': 'application/json' }
    //     // })
    //     // const user = await res.json()
    //     //
    //     // // If no error and we have user data, return it
    //     // if (res.ok && user) {
    //     //   return user
    //     // }
    //     // // Return null if user data could not be retrieved
    //     // return null
    //   }
    // })
  ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
