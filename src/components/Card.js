import styles from "./Card.module.css";
import starImage from "../images/star.png";

function Card({ title, description, image, cost, starsRate, starsTotal }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__stats}>
        <img src={starImage} alt="Stars" className={styles.card__stats__star} />
        <span>{starsRate}</span>
        <span className={styles.card__stats__grayText}>({starsTotal})</span>
        <span className={styles.card__stats__grayText}>•</span>
        <span className={styles.card__stats__grayText}>USA</span>
      </div>
      <p>{description}</p>
      <p>
        <span className={styles.card__cost__boldText}>From ${cost}</span> /
        person
      </p>
    </article>
  );
}

export default Card;
