// src/components/PaymentMethods.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
// Import the SVGs
import cashappLogo from "../assets/cashapp-logo.svg";
import applepayLogo from "../assets/applepay-logo.svg";

const PaymentMethods = ({ className = "" }) => {
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="font-sans text-body font-medium text-earth-500 mb-3">
        Accepted Payment Methods:
      </p>
      <div className="flex items-center gap-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              src={cashappLogo}
              alt="Cash App"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-sans text-body-sm text-earth-500">
            Cash App
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              src={applepayLogo}
              alt="Apple Pay"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-sans text-body-sm text-earth-500">
            Apple Pay
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

PaymentMethods.propTypes = {
  className: PropTypes.string,
};

export default PaymentMethods;
