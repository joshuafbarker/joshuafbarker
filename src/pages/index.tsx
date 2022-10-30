import styles from "../styles/pages/home.module.scss";
import Content from "src/components/Content";
import Hero from "src/components/Hero";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <Hero>
        <h1 className={styles.title}>Hello world, I'm Josh.</h1>
        <p className={styles.subtitle}>
          Senior Engineer @{" "}
          <a
            className={styles.companyLink}
            href="https://redventures.com"
            target="_blank"
          >
            Red Ventures.
          </a>
        </p>
      </Hero>
      <Content>
        <Link href="/nerd">Nerd Hub</Link>
      </Content>
    </>
  );
};

export default IndexPage;
