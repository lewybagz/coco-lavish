import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
  return (
    <div id="hero" className="h-screen relative bg-earth-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
      >
        <motion.h1
          id="hero-title" // Add the ID here
          className="text-display font-serif font-bold text-coco-400 mb-6"
        >
          <AnimatedText
            text="Cocalavish"
            className="text-display font-serif font-bold text-coco-400 mb-6"
            animation="bounce"
            delay={0.2}
          />
        </motion.h1>

        <AnimatedText
          text="Indulge in nature's finest ingredients for your hair and skin's radiant journey"
          className="text-body-lg font-sans text-earth-500 max-w-2xl"
          animation="slide"
          delay={0.8}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12"
        >
          <Link
            to="ingredients"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <AnimatedText
                text="Discover Our Products"
                className="text-body font-sans text-nature-400 mb-2"
                animation="fade"
                delay={1.6}
              />
              <ArrowDown className="text-nature-400" size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-coco-200 mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-nature-200 mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Hero;
