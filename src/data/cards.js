import katieZaferes from "../images/katie-zaferes.png";
import weddingPhotography from "../images/wedding-photograpphy.png";
import mountainBike from "../images/mountain-bike.png";

const cards = [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    description:
      'I will share with you what I call "Positivetily Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and loses. But learning from those difficult moments is what gave me the abbility to rise above them and reach my goals.',
    price: 136,
    coverImg: katieZaferes,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last in lifetime.",
    price: 125,
    coverImg: weddingPhotography,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landspace and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: mountainBike,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    openSpots: 5,
  },
];

export default cards;
