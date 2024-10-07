import Card from "./Card";

import styles from "./Cards.module.css";
import data from "../data/cards";

function Cards() {
  return (
    <section className={styles.cards__list}>
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            descprtion={card.description}
            price={card.price}
            openSpots={card.openSpots}
          />
        );
      })}
    </section>
  );
}

export default Cards;
