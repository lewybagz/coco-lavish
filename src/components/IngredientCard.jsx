import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const IngredientCard = ({
  name,
  description,
  benefits,
  imageUrl,
  isButterOption = false,
  isScentOption = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-96 cursor-pointer card-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="card-content"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="card-face bg-earth-100 border-2 border-coco-300 shadow-lg rounded-xl overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className={`w-full h-full ${
                name === "Vitamin E" ||
                name === "Almond Oil" ||
                name === "Essential Oils"
                  ? "object-contain p-4"
                  : "object-cover"
              }`}
            />
          </div>
          <div className="p-4 bg-gradient-to-br from-coco-200 to-nature-200">
            <h3
              className={`font-serif ${
                name === "African Shea/Mango Butter"
                  ? "text-[1.4rem] p-0"
                  : "text-heading-4"
              } font-semibold text-coco-500 mb-2`}
            >
              {name}
              {isButterOption && (
                <span className="text-sm text-nature-400 ml-2">
                  (Your Choice)
                </span>
              )}
              {isScentOption && (
                <span className="text-sm text-nature-400 ml-2">
                  (Your Choice)
                </span>
              )}
            </h3>
            <p
              className={`font-sans text-body text-earth-500 ${
                name === "African Shea/Mango Butter" ? "mb-0" : "mb-4"
              }`}
            >
              {description}
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center text-nature-400 gap-2"
            >
              <Info size={20} />
              <span className="font-sans text-body-sm">Click for benefits</span>
            </motion.div>
          </div>
        </div>

        {/* Back of card */}
        <div className="card-face card-back rounded-xl p-6 bg-gradient-to-br from-coco-200 to-nature-200 border-2 border-coco-300 shadow-lg">
          <h4 className="font-serif text-heading-4 font-semibold text-coco-500 mb-4">
            Benefits:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start font-sans text-body text-earth-500"
              >
                <span className="text-coco-400 mr-2">•</span>
                {benefit}
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="absolute bottom-4 right-4 font-sans text-body-sm text-nature-400 
              hover:text-nature-500 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            Back to ingredient
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  isButterOption: PropTypes.bool,
  isScentOption: PropTypes.bool,
};

export default IngredientCard;
