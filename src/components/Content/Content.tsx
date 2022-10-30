import styles from "./Content.module.scss";

const Content = ({ children }) => {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
