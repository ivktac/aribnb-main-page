import styles from "./Card.module.css";
import starImage from "../images/star.png";

function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  descprtion,
  price,
  openSpots,
}) {
  const badgeText =
    openSpots > 0 ? (location === "Online" ? "Online" : "") : "Sold Out";

  return (
    <article className={styles.card}>
      {badgeText && <div className={styles.card__badge}>{badgeText}</div>}
      <img src={img} alt={descprtion} className={styles.card__image} />
      <div className={styles.card__stats}>
        <img src={starImage} alt="Stars" className={styles.card__stats__star} />
        <span>{rating}</span>
        <span className={styles.card__stats__grayText}>({reviewCount})</span>
        <span className={styles.card__stats__grayText}>•</span>
        <span className={styles.card__stats__grayText}>{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className={styles.card__cost__boldText}>From ${price}</span> /
        person
      </p>
    </article>
  );
}

export default Card;
