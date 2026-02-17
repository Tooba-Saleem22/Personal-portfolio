import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Clean Design",
    description:
      "Modern, clean and easy to use layouts for better user experience.",
  },
  {
    title: "Mobile Friendly",
    description:
      "Your website will look perfect on mobile, tablet and desktop.",
  },
  {
    title: "Fast Websites",
    description: "Optimized and fast loading websites for better performance.",
  },
  {
    title: "Client Focused",
    description: "I listen to your needs and build exactly what you want.",
  },
];

const WhyChooseMe = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row gap-10">
      {/* Left Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold uppercase flex-1 text-black text-center md:text-left"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why <br /> Choose Me
      </motion.h2>

      {/* Right Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 mt-5">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`
              flex flex-col justify-center py-8 px-4
              ${idx % 2 === 0 ? "border-r border-black/30" : ""}
              ${idx < 2 ? "border-b border-black/30" : ""}
            `}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-black/80 leading-snug">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseMe;
