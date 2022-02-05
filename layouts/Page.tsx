import styles from 'styles/layouts/page.module.css';

const PageLayout = ({ children }) => {
  return (
    <main>
      <div className={styles.pageWrapper}>{children}</div>
    </main>
  );
};

export default PageLayout;
