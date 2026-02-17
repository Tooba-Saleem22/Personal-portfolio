import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" w-full flex items-center justify-center px-6 mt-40 ">
      <div className="max-w-[1400px] w-full text-center flex flex-col items-center justify-center">
        {/* Sub heading */}
        <motion.h4
          className="text-2xl md:text-4xl text-black mb-4 font-normal"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello, I’m Tooba
        </motion.h4>

        {/* Main heading */}
        <motion.h1
          className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-8xl font-bold text-black leading-tight max-w-6xl uppercase"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Bringing ideas to life with code and design.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
