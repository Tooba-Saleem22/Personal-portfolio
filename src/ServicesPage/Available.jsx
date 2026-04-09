import React from "react";
import { motion } from "framer-motion";

const services = [
  "React",
  "MERN Stack",
  "Frontend Development",
  "Web Design",
  "WordPress",
  "SEO",
];

const Available = () => {
  return (
    <div className="w-full bg-white py-12 mb-10 text-black">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-7xl font-bold uppercase text-center mt-14 mb-14 leading-none"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What’s <br /> Available?
      </motion.h2>

      {/* Marquee Text */}
      <div className="w-full overflow-hidden border-t border-b border-black/40 py-2">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 6, // ⚡ faster (pehle 12 tha)
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, dup) =>
            services.map((item, index) => (
              <div
                key={`${dup}-${index}`}
                className="flex items-center space-x-2 px-3 text-sm md:text-base"
              >
                <span>{item}</span>
                <span className="font-light">+++</span>
              </div>
            )),
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Available;
