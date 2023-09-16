import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type ICredentials = {
  email: string;
  password: string;
};

export const authOptions = {
  pages: {
    signIn: '/index'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      async authorize({ email, password }: ICredentials) {
        const res = await fetch('http://localhost:8000/user/session', {
          method: 'POST',
          body: new URLSearchParams({ email, password })
        });

        const data = await res.json();

        if (data) {
          return { ...data, jwt: data.jwt };
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.SECRET
};

export default NextAuth(authOptions);
