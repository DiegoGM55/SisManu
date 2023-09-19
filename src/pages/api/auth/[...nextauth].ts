import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type ICredentials = {
  email: string;
  password: string;
};
export const authOptions = {
  pages: {
    signIn: '/'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize({ email, password }: ICredentials) {
        const response = await fetch('http://localhost:8000/user/session', {
          method: 'POST',
          body: new URLSearchParams({ email, password })
        });

        const data = await response.json();

        if (data) {
          return { ...data, jwt: data.jwt };
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
