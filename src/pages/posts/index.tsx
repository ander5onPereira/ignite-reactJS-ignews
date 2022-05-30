import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>TITULO</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              autem voluptatum, nesciunt itaque, unde accusantium nisi eaque
              odio, veritatis obcaecati provident. Assumenda corporis fugit
              voluptatem modi. Enim dolor in alias.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>TITULO</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              autem voluptatum, nesciunt itaque, unde accusantium nisi eaque
              odio, veritatis obcaecati provident. Assumenda corporis fugit
              voluptatem modi. Enim dolor in alias.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>TITULO</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              autem voluptatum, nesciunt itaque, unde accusantium nisi eaque
              odio, veritatis obcaecati provident. Assumenda corporis fugit
              voluptatem modi. Enim dolor in alias.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
