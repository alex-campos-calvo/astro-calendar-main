//import Google from '@auth/core/providers/google'
//import { defineConfig } from 'auth-astro'

/*export default defineConfig({
    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            const result = {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            }
            console.log('Callback')
            console.log(result)
            return result
        }
    }
})*/