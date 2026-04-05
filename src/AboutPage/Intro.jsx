import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Intro = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-16 pt-28 md:pt-32 pb-16 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            I’m Tooba
            <br /> Saleem
          </motion.h1>

          <motion.p
            className="mt-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md sm:max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I help businesses and individuals bring their ideas to life online.
            From designing clean and modern interfaces to building responsive
            and interactive websites, my focus is on making your digital
            presence look great and work smoothly.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              text="Contact Now"
              className="w-36 h-11 justify-center md:justify-end px-4 py-2 text-sm"
              onClick={() =>
                (window.location.href =
                  "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,")
              }
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-[360px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/Gemini_Generated_Image_nj0qienj0qienj0q.png"
              alt="Tooba Saleem"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
