import Hero from "src/components/Hero";
import Content from "src/components/Content";
import Link from "next/link";

import styles from "src/styles/pages/nerd.module.scss";

const Nerd = () => {
  return (
    <>
      <Hero>
        <h1>Nerd Hub</h1>
        <p>A place to channel my inner nerd and share it with... the World.</p>
      </Hero>
      <Content>
        <section>
          <h2>Marvel Comic Reading Orders</h2>
          <ul className={styles.readingOrders}>
            <li>
              <Link href="/nerd/marvel/ultimate-order">Ultimate Universe</Link>
            </li>
          </ul>
        </section>
      </Content>
    </>
  );
};

export default Nerd;
