import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <Hero />
        <Cards />
      </main>
    </div>
  );
}

export default App;
