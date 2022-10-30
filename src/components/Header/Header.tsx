import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        JB
      </Link>
      <nav className={styles.nav}>
        <a href="#">github.</a>
        <a href="#">twitter.</a>
        <a href="#">joshuafbarker@icloud.com</a>
      </nav>
    </header>
  );
};

export default Header;
