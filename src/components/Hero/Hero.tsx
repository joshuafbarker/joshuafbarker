import styles from "./Hero.module.scss";

const Hero = ({ children }) => {
  return <section className={styles.hero}>{children}</section>;
};

export default Hero;
