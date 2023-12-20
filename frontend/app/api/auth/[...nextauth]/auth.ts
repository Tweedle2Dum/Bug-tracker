import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase";
import { AuthOptions } from "next-auth";
import { TokenObject } from "./nextauth";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
       /*  const users = [
          "sankhayan2002@gmail.com",
          "utkarsh.work1405@gmail.com",
          "sam@logbunny.dev",
        ];
        if (!users.includes((credentials as any).email)) {
          return Promise.reject("Not allowed to signin");
        } */

        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.idToken = await auth.currentUser?.getIdToken();
        token.id = auth.currentUser?.uid;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.user = user;
      session.token = token as TokenObject | JWT;

      return session;
    },
  },

  debug: true,
};

export default authOptions;
