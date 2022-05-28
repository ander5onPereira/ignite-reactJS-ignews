import { stripe } from './../../services/stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { useSession } from 'next-auth/react';

export const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: session } = useSession();
  if (req.method === 'POST') {
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
    });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price: 'price_1L1JBiK0P2NrtVUGXv4v7mjz',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
};
