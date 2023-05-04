import NextAuth, { AuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

interface CustomSession extends Session {
    accessToken?: string;
}

type CustomSettings = {
    session: CustomSession;
    token: JWT;
    user: AdapterUser;
    newSession: any;
    trigger: 'update';
};

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        VkProvider({
            clientId: process.env.VK_ID || '',
            clientSecret: process.env.VK_SECRET || '',
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }: CustomSettings) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
};

export default NextAuth(authOptions);