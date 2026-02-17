import React from "react";
import { motion } from "framer-motion";

const icons = [
  "/assets/ServicesPage/consignment_3045517.png",
  "/assets/ServicesPage/contact-form.png",
  "/assets/ServicesPage/web-design_9103694.png",
  "/assets/ServicesPage/web-development_17365114.png",
  "/assets/ServicesPage/wordpress.png",
];

const Available = () => {
  return (
    <div className="w-full bg-white py-20 mb-16 text-black">
      <motion.h2
        className="text-5xl md:text-9xl font-bold uppercase text-center mt-11 md:mt-10 mb-20 leading-none"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What’s <br /> Available?
      </motion.h2>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex w-[200%] gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...icons, ...icons].map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex-none w-[15%] md:w-[10%] h-[80px] md:h-[150px] overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <img
                src={icon}
                alt={`Available ${idx}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Available;
