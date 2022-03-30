import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
    >
      <FaGithub color="#04d361" />
      User Name
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
