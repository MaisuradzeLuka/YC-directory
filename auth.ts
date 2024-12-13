import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/writeClient";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile: { sub: id, name, email, picture } }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_ID_QUERY, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          email,
          image: picture,
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && token) {
        const user = await client.fetch(AUTHOR_BY_ID_QUERY, {
          id: profile?.sub,
        });
        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
