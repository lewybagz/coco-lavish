import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Ingredients from "./sections/Ingredients";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import coconutImage from "./assets/coconut.png";
import vitamine from "./assets/vitamine.png";
import almondImage from "./assets/almond-oil.png";
import essentialOils from "./assets/essential-oils.png";

function App() {
  const ingredientsData = [
    {
      name: "Coconut Oil",
      description:
        "Pure, cold-pressed coconut oil known for its deep moisturizing properties.",
      benefits: [
        "Deep moisturization",
        "Natural antimicrobial properties",
        "Reduces inflammation",
        "Penetrates hair shaft for protection",
        "Rich in vitamin E and fatty acids",
      ],
      imageUrl: coconutImage, // We'll update this when you provide the image
    },
    {
      name: "Almond Oil",
      description:
        "Sweet almond oil rich in vitamins and minerals for skin and hair health.",
      benefits: [
        "Rich in Vitamin E",
        "Helps reduce dark circles",
        "Promotes healthy hair growth",
        "Gentle and suitable for sensitive skin",
        "Improves complexion",
      ],
      imageUrl: almondImage,
    },
    {
      name: "African Shea/Mango Butter",
      description:
        "Choose between rich African shea butter or smooth mango butter.",
      benefits: [
        "Deep moisturization",
        "Anti-inflammatory properties",
        "Promotes skin elasticity",
        "Natural UV protection",
        "Rich in vitamins A and E",
      ],
      imageUrl: "/path-to-butter-image.jpg",
      isButterOption: true,
    },
    {
      name: "Vitamin E",
      description:
        "Pure vitamin E oil for enhanced preservation and skin benefits.",
      benefits: [
        "Powerful antioxidant",
        "Helps prevent premature aging",
        "Supports skin healing",
        "Natural preservative",
        "Reduces scarring",
      ],
      imageUrl: vitamine,
    },
    {
      name: "Essential Oils",
      description:
        "Premium essential oils for natural fragrance and aromatherapy benefits.",
      benefits: [
        "Natural fragrance",
        "Aromatherapy benefits",
        "Additional skin care properties",
        "Mood enhancement",
        "Customizable scents",
      ],
      imageUrl: essentialOils,
      isScentOption: true,
    },
  ];
  return (
    <div className="relative min-h-screen bg-earth-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Ingredients ingredientsData={ingredientsData} />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

export default App;
