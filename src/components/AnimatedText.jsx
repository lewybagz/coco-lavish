// src/components/AnimatedText.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedText = ({
  text,
  className = "",
  once = true,
  delay = 0,
  animation = "slide", // "slide", "fade", or "bounce"
}) => {
  // Split text into words
  const words = text.split(" ");

  // Animation variants
  const animations = {
    slide: {
      hidden: { y: 50, opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.1 + delay,
          duration: 0.5,
        },
      }),
    },
    fade: {
      hidden: { opacity: 0 },
      visible: (i) => ({
        opacity: 1,
        transition: {
          delay: i * 0.1 + delay,
          duration: 0.5,
        },
      }),
    },
    bounce: {
      hidden: { y: -50, opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
          delay: i * 0.1 + delay,
        },
      }),
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={`w-fit ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={selectedAnimation}
          className="inline-block whitespace-pre"
          aria-hidden="true"
        >
          {word}
          {i !== words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  once: PropTypes.bool,
  delay: PropTypes.number,
  animation: PropTypes.oneOf(["slide", "fade", "bounce"]),
};

export default AnimatedText;
