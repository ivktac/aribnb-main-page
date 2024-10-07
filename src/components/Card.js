import styles from "./Card.module.css";
import starImage from "../images/star.png";

function Card(props) {
  const badgeText =
    props.item.openSpots > 0
      ? props.item.location === "Online"
        ? "Online"
        : ""
      : "Sold Out";

  return (
    <article className={styles.card}>
      {badgeText && <div className={styles.card__badge}>{badgeText}</div>}
      <img
        src={props.item.coverImg}
        alt={props.item.descprtion}
        className={styles.card__image}
      />
      <div className={styles.card__stats}>
        <img src={starImage} alt="Stars" className={styles.card__stats__star} />
        <span>{props.item.rating}</span>
        <span className={styles.card__stats__grayText}>
          ({props.item.reviewCount})
        </span>
        <span className={styles.card__stats__grayText}>•</span>
        <span className={styles.card__stats__grayText}>
          {props.item.location}
        </span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className={styles.card__cost__boldText}>
          From ${props.item.price}
        </span>{" "}
        / person
      </p>
    </article>
  );
}

export default Card;
