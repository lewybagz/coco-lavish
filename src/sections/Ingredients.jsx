import { motion } from "framer-motion";
import IngredientCard from "../components/IngredientCard";
import PropTypes from "prop-types";
import AnimatedText from "../components/AnimatedText";

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
    imageUrl: "/path-to-coconut-image.jpg", // We'll update this when you provide the image
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
    imageUrl: "/path-to-almond-image.jpg",
  },
  {
    name: "Shea/Mango Butter",
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
    imageUrl: "/path-to-vitamin-e-image.jpg",
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
    imageUrl: "/path-to-essential-oils-image.jpg",
  },
];

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-20 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText
          text="Our Premium Ingredients"
          className="text-4xl font-bold text-coco-500 text-center mb-12"
          animation="slide"
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {ingredientsData.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <IngredientCard {...ingredient} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;

const ingredientShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  isButterOption: PropTypes.bool,
});

// Add this to the Ingredients component
Ingredients.propTypes = {
  ingredientsData: PropTypes.arrayOf(ingredientShape).isRequired,
};
