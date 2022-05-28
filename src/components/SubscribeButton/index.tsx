import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { status } = useSession();
  async function hadlerSubscribe() {
    if (status === 'unauthenticated') {
      signIn('github');
      return;
    }
    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={hadlerSubscribe}
    >
      Subscribe now
    </button>
  );
}
