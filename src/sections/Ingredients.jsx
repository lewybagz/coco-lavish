import { motion } from "framer-motion";
import IngredientCard from "../components/IngredientCard";
import PropTypes from "prop-types";
import AnimatedText from "../components/AnimatedText";

const Ingredients = ({ ingredientsData }) => {
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
