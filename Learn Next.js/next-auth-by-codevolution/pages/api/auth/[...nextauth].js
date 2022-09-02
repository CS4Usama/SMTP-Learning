import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';


export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'asdcvbtjhm',
    },
    // callbacks customize the session object
    callbacks: {
        async jwt(token, user) {        // jwt callback function has a total of 5 parameters, it is called whenever json web token is created & updated
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            return session;
        }
    }
});
