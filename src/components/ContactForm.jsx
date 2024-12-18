import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Check, AlertCircle } from "lucide-react";
import CustomDropdown from "./CustomDropdown";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const scentOptions = [
    { value: "lavender", label: "Lavender" },
    { value: "vanilla", label: "Vanilla" },
    // Add all your options here
  ];
  const butterOptions = [
    { value: "african_shea", label: "African Shea Butter" },
    { value: "mango", label: "Mango Butter" },
    // Add all your options here
  ];
  const sizeOptions = [
    { value: "0.6_OZ", label: "0.6 OZ - $6" },
    { value: "3_OZ", label: "3 OZ - $15" },
  ];

  const calculateTotal = () => {
    const prices = {
      "0.6_OZ": 6,
      "3_OZ": 15,
    };
    return selectedSize ? prices[selectedSize] * quantity : 0;
  };

  const getDisplayValue = (value, options) => {
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form.current);

    // Transform the values before sending
    const butter_display = getDisplayValue(
      formData.get("butter_choice"),
      butterOptions
    );
    const scent_display = getDisplayValue(
      formData.get("scent_choice"),
      scentOptions
    );

    // Create template params with display values
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      butter_choice: butter_display, // This will send "African Shea Butter" instead of "african_shea"
      scent_choice: scent_display, // This will send "Lavender" instead of "lavender"
      quantity: formData.get("quantity"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full max-w-md"
    >
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-xl" />

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="relative space-y-6 p-8 rounded-xl border border-coco-200"
      >
        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-2">
            <label
              className="block text-earth-500 font-sans text-body-sm font-medium"
              htmlFor="name"
            >
              Name*
            </label>
            <span className="font-sans text-body-sm text-earth-400 italic">
              * indicates a required field
            </span>
          </div>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-coco-200 
             focus:outline-none focus:ring-2 focus:ring-coco-400 focus:border-transparent
             placeholder:text-earth-400 font-sans text-body placeholder:font-sans placeholder:text-body"
            placeholder="Your name"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-coco-200 
             focus:outline-none focus:ring-2 focus:ring-coco-400 focus:border-transparent
             placeholder:text-earth-400 font-sans text-body placeholder:font-sans placeholder:text-body"
            placeholder="your.email@example.com"
          />
        </motion.div>

        {/* Size Choice Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="butter_choice"
          >
            Select Size*
          </label>
          <CustomDropdown
            options={sizeOptions}
            name="size_choice"
            required
            placeholder="Choose your size..."
            onChange={(e) => {
              setSelectedSize(e.target.value);
            }}
          />
          {selectedSize && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="-mt-0.5 right-10"
            >
              <span className="font-sans text-xs text-earth-500 italic">
                Please Place A Seperate Order If You&rsquo;d Like More Than One
                Size
              </span>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="!mt-4"
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="butter_choice"
          >
            Select Butter Type*
          </label>
          <CustomDropdown
            options={butterOptions}
            name="butter_choice"
            required
            placeholder="Choose your butter..."
            onChange={(e) => {
              // Handle change if needed
              console.log(e.target.value);
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="butter_choice"
          >
            Select Scent*
          </label>
          <CustomDropdown
            options={scentOptions}
            name="scent_choice"
            required
            placeholder="Choose your scent..."
            onChange={(e) => {
              // Handle change if needed
              console.log(e.target.value);
            }}
          />
        </motion.div>

        {/* Quantity Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="quantity"
          >
            Quantity*
          </label>
          <div className="relative">
            <input
              type="number"
              id="quantity"
              name="quantity"
              required
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-coco-200
   focus:outline-none focus:ring-2 focus:ring-coco-400 focus:border-transparent
   placeholder:text-earth-400 font-sans text-body placeholder:font-sans placeholder:text-body pr-12"
              placeholder="Enter quantity"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 mr-3">
              <motion.button
                type="button"
                onClick={() => {
                  const input = document.getElementById("quantity");
                  input.stepUp();
                  input.dispatchEvent(new Event("change", { bubbles: true }));
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-earth-500 hover:text-coco-400 transition-colors"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  const input = document.getElementById("quantity");
                  if (input.value > 1) input.stepDown();
                  input.dispatchEvent(new Event("change", { bubbles: true }));
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-earth-500 hover:text-coco-400 transition-colors"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.button>
            </div>
          </div>
          {selectedSize && quantity > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -mt-0.5 right-10"
            >
              <span className="font-sans text-body-sm text-earth-500 italic">
                Total: ${calculateTotal().toFixed(2)}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <label
            className="block text-earth-500 mb-2 font-sans text-body-sm font-medium"
            htmlFor="message"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-coco-200 
             focus:outline-none focus:ring-2 focus:ring-coco-400 focus:border-transparent
             placeholder:text-earth-400 resize-none font-sans text-body placeholder:font-sans placeholder:text-body"
            placeholder="Any special requests or notes for your order..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg flex items-center justify-center gap-2
             text-white font-sans text-body font-medium transition-colors
             ${
               isSubmitting
                 ? "bg-earth-400 cursor-not-allowed"
                 : "bg-coco-400 hover:bg-coco-500"
             }`}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={20} />
                </motion.div>
                <span className="font-sans text-body">Processing Order...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span className="font-sans text-body">Place Order</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-center gap-2 p-4 rounded-lg ${
                submitStatus === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus === "success" ? (
                <>
                  <Check size={20} />
                  <p className="font-sans text-body">
                    Order placed successfully! We&rsquo;ll contact you soon.
                  </p>
                </>
              ) : (
                <>
                  <AlertCircle size={20} />
                  <p className="font-sans text-body">
                    Failed to place order. Please try again.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
