import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import * as Prismic from '@prismicio/client';
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      page: 1,
      pageSize: 100,
    },
  );
  console.log(JSON.stringify(response, null, 2));
  return {
    props: {},
  };
};
