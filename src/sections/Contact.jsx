import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import PaymentMethods from "../components/PaymentMethods";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-100 to-white opacity-70" />
      <div className="absolute -left-32 top-0 w-96 h-96 bg-coco-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute -right-32 bottom-0 w-96 h-96 bg-nature-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          {/* Title Section */}
          <div className="md:text-left text-center ml-8">
            <AnimatedText
              text="Get In Touch"
              className="text-5xl font-serif font-bold text-coco-500 mb-4" // Using direct text-5xl instead of text-display-2
              animation="bounce"
              delay={0.4}
            />
            <AnimatedText
              text="Ready to place your order?"
              className="font-sans text-xl text-earth-500" // Using direct text-xl instead of text-body-lg
              animation="fade"
              delay={0.4}
            />
            <AnimatedText
              text="Have questions?"
              className="font-sans text-xl text-earth-500" // Using direct text-xl instead of text-body-lg
              animation="fade"
              delay={0.7}
            />
            <AnimatedText
              text="We'd love to hear from you."
              className="font-sans text-xl text-earth-500" // Using direct text-xl instead of text-body-lg
              animation="fade"
              delay={1.0}
            />
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:mt-0 mt-8 mr-8"
          >
            <PaymentMethods />
          </motion.div>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-base text-earth-500 mb-2">
            You can also reach us at:
          </p>
          <a
            href="mailto:contact@cocalavish.com"
            className="font-sans text-base text-coco-400 hover:text-coco-500 transition-colors" // Using direct text-base instead of text-body
          >
            contact@cocalavish.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
