// src/components/CustomDropdown.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange && onChange({ target: { name, value: option.value } });
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2 rounded-lg bg-white/50 border border-coco-200 
          focus:outline-none focus:ring-2 focus:ring-coco-400 focus:border-transparent
          text-earth-500 cursor-pointer font-sans text-body text-left flex justify-between items-center`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedValue ? "" : "text-earth-400"}>
          {selectedValue
            ? options.find((opt) => opt.value === selectedValue)?.label
            : placeholder}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-earth-100 border border-coco-200
      rounded-lg shadow-lg max-h-[300px] overflow-y-auto"
            role="listbox"
            tabIndex={-1}
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 cursor-pointer font-sans text-body
          ${
            selectedValue === option.value
              ? "bg-earth-200 text-coco-500"
              : "text-earth-500 hover:bg-earth-200"
          }`}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name={name}
        value={selectedValue || ""}
        required={required}
      />
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default CustomDropdown;
