import { FC } from 'react';
import Head from 'next/head';
import PageLayout from 'layouts/Page';
import PlaylistCard from 'components/PlaylistCard';
import playlists from 'data/playlists.json';
import styles from 'styles/pages/playlists.module.css';

const Playlists = () => {
  const { data } = playlists;

  return (
    <>
      <Head>
        <title>jb. | Playlists</title>
      </Head>
      <PageLayout>
        <header className={styles.playlistsHeader}>
          {/* <Link href="/">
            <a>Home</a>
          </Link> */}
          <h1>Playlists</h1>
          <p>Developers rely heavily on music in their day to day lives.</p>
          <p>
            Here are some developer inspired playlists that should boost that
            productivity.
          </p>
        </header>

        <section className={styles.playlistsContainer}>
          {data?.map((playlist) => {
            return (
              <PlaylistCard
                key={playlist.title}
                title={playlist.title}
                image={playlist.image}
                description={playlist.description}
                link={playlist.link}
                gradient={playlist.gradient}
                cta={playlist.cta}
                tags={playlist.tags}
              />
            );
          })}
        </section>
      </PageLayout>
    </>
  );
};

export default Playlists;
