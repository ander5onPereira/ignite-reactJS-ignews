import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('users_by_email'),
                      q.Casefold(session.user.email),
                    ),
                  ),
                ),
              ),
              q.Match(q.Index('subscription_by_status'), 'active'),
            ]),
          ),
        );
        return { ...session, activeSubcription: userActiveSubscription };
      } catch (err) {
        return {
          ...session,
          activeSubcription: null,
        };
      }
    },
    async signIn({ user, account, profile, credentials }) {
      const { email } = user;
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('users_by_email'), q.Casefold(user.email)),
              ),
            ),

            q.Create(q.Collection('users'), {
              data: {
                email,
              },
            }),
            q.Get(q.Match(q.Index('users_by_email'), q.Casefold(user.email))),
          ),
        );

        return true;
      } catch {
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
