import React from "react";
import { motion } from "framer-motion";

const numbers = [
  { value: "2+", label: "Years of Freelancing" },
  { value: "10+", label: "Projects Completed" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const NumbersSection = () => {
  return (
    <div
      className="w-full bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row gap-10
                rounded-t-lg md:rounded-t-[180px] overflow-hidden"
    >
      {/* Left title */}
      <motion.h2
        className="text-4xl md:text-6xl md:leading-[0.9] font-bold uppercase flex-1 text-black text-center md:text-left md:self-start"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some <br /> Numbers
      </motion.h2>

      {/* Right metrics */}
      <div className="flex-1 grid grid-cols-2 gap-6 mt-5 relative">
        {numbers.map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col items-center justify-center py-7
                        border-gray-400 ${idx % 2 === 0 ? "border-r" : ""}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl md:text-6xl font-bold text-black">
              {item.value}
            </span>
            <span className="text-sm text-black mt-2">{item.label}</span>
          </motion.div>
        ))}

        {/* Horizontal line in middle */}
        <div className="absolute left-2 right-2 top-[50%] border-t border-gray-400 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default NumbersSection;
