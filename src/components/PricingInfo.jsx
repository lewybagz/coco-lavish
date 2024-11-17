// src/components/PricingInfo.jsx
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const PricingInfo = () => {
  const prices = [
    { size: "0.6 oz", price: "$6" },
    { size: "3.0 oz", price: "$15" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.0 }}
      className="mt-8 mb-8 bg-earth-100/50 backdrop-blur-sm border border-coco-200 rounded-xl p-6 max-w-md"
    >
      <h3 className="font-serif text-heading-4 text-coco-500 mb-4">
        Sizes & Pricing
      </h3>
      <div className="space-y-2">
        {prices.map((item, index) => (
          <motion.div
            key={item.size}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 + index * 0.1 }}
            className="flex justify-between items-center py-2 border-b border-earth-200 last:border-0"
          >
            <span className="font-sans text-body text-earth-500">
              {item.size}
            </span>
            <span className="font-sans text-body font-medium text-coco-500">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <AnimatedText
          text="Stay tuned for upcoming holiday specials!"
          className="font-sans text-body-sm text-earth-400 italic mt-4 text-center"
          animation="fade"
          delay={2.4}
        />
      </div>
    </motion.div>
  );
};

export default PricingInfo;
