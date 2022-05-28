import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { status } = useSession();
  function hadlerSubscribe() {
    if (status === 'unauthenticated') {
      signIn('github');
      return;
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
