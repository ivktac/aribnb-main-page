import Card from "./Card";

import styles from "./Cards.module.css";
import data from "../data/cards";

function Cards() {
  return (
    <section className={styles.cards__list}>
      {data.map((card) => {
        return <Card key={card.id} item={card} />;
      })}
    </section>
  );
}

export default Cards;
