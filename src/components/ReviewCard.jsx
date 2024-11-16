import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PropTypes from "prop-types";
import AnimatedText from "./AnimatedText";

const ReviewCard = ({ name, image, rating, review, location }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-earth-100 p-6 rounded-xl shadow-lg border border-coco-200 max-w-md"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-coco-300">
          <img
            src={image || "/api/placeholder/64/64"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <AnimatedText
            text={name}
            className="font-serif font-semibold text-heading-4 text-coco-500"
            animation="fade"
          />
          <p className="text-earth-400 text-sm">{location}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < rating ? "fill-coco-400 text-coco-400" : "text-earth-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute -left-2 -top-2 text-coco-200 w-8 h-8 opacity-50" />
        <AnimatedText
          text={review}
          className="font-sans text-body italic pl-6 text-earth-500"
          animation="slide"
          delay={0.2}
        />
      </div>
    </motion.div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ReviewCard;
