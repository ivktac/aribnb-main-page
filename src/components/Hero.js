import styles from "./Hero.module.css";
import photoGrid from "../images/photo-grid.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={photoGrid} alt="Hero Grid" className={styles.hero__photoGrid} />
      <h1 className={styles.hero__title}>Online Experiences</h1>
      <p className={styles.hero__subtitle}>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
