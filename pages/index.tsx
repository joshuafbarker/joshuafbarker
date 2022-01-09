import Image from 'next/image';
import styles from 'styles/pages/index.module.css';

const HomePage = ({ image }) => {
  return (
    <>
      <section className="avatar">
        <Image src={image} alt="Joshua Barker" width={200} height={200} className={styles.avatar} />
      </section>
      <section className="info">
        <h1>Joshua Barker</h1>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  // const posts = getAllPublishedPosts();

  // fetch github user data
  const ghRes = await fetch('https://api.github.com/users/joshuafbarker');
  const ghData = await ghRes.json();

  const { avatar_url: image } = ghData;
  return {
    props: {
      image
    }
  };
};

export default HomePage;
