import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import katieZaferes from "./images/katie-zaferes.png";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <section className="cards">
        <Card
          image={katieZaferes}
          title="Katie Zaferes"
          starsRate="5.0"
          starsTotal="6"
          description="Life lessons with Katie Zaferes"
          cost="136"
        />
      </section>
    </main>
  );
}

export default App;
