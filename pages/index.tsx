import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/pages/index.module.css';
import { getAllPublishedPosts } from 'services/mdx';

const HomePage = ({ image, posts }) => {
  return (
    <div className={styles.container}>
      <section className="avatar">
        <Image
          src={image}
          alt="Joshua Barker"
          width={200}
          height={200}
          className={styles.avatar}
        />
      </section>
      <section className="info">
        <h3>Hello. My name is Josh.</h3>
        <p>
          I&rsquo;m a Senior Engineer @
          <a href="https://redventures.com" target="_blank" rel="noreferrer">
            Red Ventures
          </a>
          .
        </p>
        <p className="mt">Work inquiries or just want to chat?</p>
        <p>
          Catch me on <a href="https://twitter.com/point_ix">twitter</a> or
          <a href="mailto:joshuafbarker@gmail.com">joshuafbarker@gmail.com</a>.
        </p>
        <p className="mt">
          Like music? Check out my developer inspired{' '}
          <Link href="/playlists">playlists</Link>.
        </p>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPublishedPosts('blog');

  // fetch github user data
  const ghRes = await fetch('https://api.github.com/users/joshuafbarker');
  const ghData = await ghRes.json();

  const { avatar_url: image } = ghData;
  return {
    props: {
      image,
      posts,
    },
  };
};

export default HomePage;
