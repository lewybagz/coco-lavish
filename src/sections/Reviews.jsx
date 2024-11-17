import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard";
import AnimatedText from "../components/AnimatedText";
import PropTypes from "prop-types";

const reviewsData = [
  {
    name: "Lewis Patterson",
    image: "", // Will add later
    rating: 5,
    review:
      "The coconut oil blend has transformed my hair care routine! My curls are more defined and moisturized than ever. Can't recommend enough!",
    location: "Gainesville, FL",
  },
  {
    name: "Brianna Quintero",
    image: "", // Will add later
    rating: 5,
    review:
      "I love how the shea butter option makes my skin feel. It's deeply moisturizing without being greasy. The natural scent is amazing too!",
    location: "Tucson, AZ",
  },
  {
    name: "Alisha Clayton",
    image: "", // Will add later
    rating: 5,
    review:
      "Finally found my holy grail product! The almond oil blend has helped reduce my dark circles and the vitamin E keeps my skin looking young.",
    location: "Houston, TX",
  },
  {
    name: "Lauren Thompson",
    image: "", // Will add later
    rating: 5,
    review:
      "The quality of these products is unmatched. I've tried the mango butter version and it's perfect for my sensitive skin. Worth every penny!",
    location: "Los Angeles, CA",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-earth-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="What Our Customers Say"
            className="text-4xl font-bold text-coco-500 mb-4"
            animation="bounce"
          />
          <AnimatedText
            text="Real experiences from our valued customers"
            className="text-xl text-earth-500"
            animation="fade"
            delay={0.2}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {reviewsData.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-coco-200 mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-nature-200 mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            y: [10, -10, 10],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
