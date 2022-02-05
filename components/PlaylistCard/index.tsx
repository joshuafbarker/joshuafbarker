import { CSSProperties } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
  gradient: any;
  cta: any;
  tags: string[];
}

const PlaylistCard = ({
  image,
  title,
  description,
  link,
  gradient,
  cta,
  tags,
}: Props) => {
  console.log(tags);
  return (
    <div
      className={styles.playlistCard}
      style={
        {
          ...gradient,
          ...cta,
        } as CSSProperties
      }
    >
      <div className={styles.playlistImage}>
        <Image
          src={'/images/' + image}
          alt={title}
          layout="responsive"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.playlistMeta}>
        <h3>{title}</h3>
        <div className={styles.playlistTagsContainer}>
          {tags.map((tag, index) => {
            return (
              <span className={styles.playlistTag} key={index}>
                {tag}
              </span>
            );
          })}
        </div>
        <p>{description}</p>
        <a href={link} className={styles.playlistCta}>
          Listen Now
        </a>
      </div>
    </div>
  );
};

export default PlaylistCard;
