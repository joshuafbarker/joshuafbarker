import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        JB
      </Link>
      <nav className={styles.nav}>
        <a href="https://github.com/joshuafbarker">github.</a>
        <a href="https://twitter.com/joshuafbarker">twitter.</a>
        <a href="mailto:joshuafbarker@icloud.com">joshuafbarker@icloud.com</a>
      </nav>
    </header>
  );
};

export default Header;
