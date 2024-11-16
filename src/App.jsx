import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Ingredients from "./sections/Ingredients";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className="relative min-h-screen bg-earth-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Ingredients />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

export default App;
