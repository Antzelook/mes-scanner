import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";

const handler = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      name: "Admin Sign-In",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const admin = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!admin) {
          console.log("❌ Admin not found");
          return null;
        }

        const isValid = compareSync(credentials.password, admin.password);

        if (!isValid) {
          console.log("❌ Invalid password");
          return null;
        }

        return {
          id: admin.id,
          email: admin.email,
          role: admin.role ?? "user",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
});

export { handler as GET, handler as POST };
