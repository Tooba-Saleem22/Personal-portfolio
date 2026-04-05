import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Intro = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20 text-black">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl md:mt-11 font-bold uppercase text-center  leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        I’m Tooba
        <br /> Saleem
      </motion.h1>

      {/* Image */}
      <motion.div
        className="w-48 h-48 md:w-72 md:h-72 mt-10 rounded-full overflow-hidden border-4 border-black"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/profile.jpg"
          alt="Tooba Saleem"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
      <motion.p
        className="max-w-2xl text-center text-sm md:text-lg mt-8 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I help businesses and individuals bring their ideas to life online. From
        designing clean and modern interfaces to building responsive and
        interactive websites, my focus is on making your digital presence look
        great and work smoothly.
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-1"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button
          text="Contact Now"
          className="w-32 h-10 px-3 py-1.5 text-sm"
          onClick={() =>
            (window.location.href =
              "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,")
          }
        />
      </motion.div>
    </section>
  );
};

export default Intro;
