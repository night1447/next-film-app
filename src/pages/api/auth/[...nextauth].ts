import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';

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
};

export default NextAuth(authOptions);