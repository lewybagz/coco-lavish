// Create a new component: src/components/SocialLinks.jsx
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import PropTypes from "prop-types";

const SocialLinks = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col items-center ${className}`}
    >
      <p className="font-sans text-body-sm text-earth-500 mb-3">
        Follow us for updates and exclusive offers:
      </p>
      <div className="flex gap-4">
        {" "}
        {/* Remove flex-col, keep just flex and gap-4 */}
        <motion.a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-earth-500 hover:text-social-instagram transition-colors"
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-earth-500 hover:text-social-facebook transition-colors"
        >
          <FaFacebook size={24} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SocialLinks;

SocialLinks.propTypes = {
  className: PropTypes.string,
};
