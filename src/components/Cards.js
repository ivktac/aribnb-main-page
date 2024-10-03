import Card from "./Card";

import katieZaferes from "../images/katie-zaferes.png";
import mountainBike from "../images/mountain-bike.png";
import weddingPhoto from "../images/wedding-photograpphy.png";
import styles from "./Cards.module.css";

const cards = [
  {
    _id: 0,
    image: katieZaferes,
    title: "Katie Zaferes",
    starsRate: 5.0,
    starsTotal: 6,
    description: "Life lessons with Katie Zaferes",
    cost: 136,
  },
  {
    _id: 1,
    image: mountainBike,
    title: "Mountain Bike",
    starsRate: 4.8,
    starsTotal: 2,
    description: "Group Mountain Biking",
    cost: 50,
  },
  {
    _id: 2,
    image: weddingPhoto,
    title: "Wedding Photography",
    starsRate: 5.0,
    starsTotal: 30,
    description: "Learn wedding photography",
    cost: 125,
  },
];

function Cards() {
  return (
    <section className={styles.cards}>
      {cards.map((card) => {
        return (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
            image={card.image}
            cost={card.cost}
            starsRate={card.starsRate}
            starsTotal={card.starsTotal}
          />
        );
      })}
    </section>
  );
}

export default Cards;
