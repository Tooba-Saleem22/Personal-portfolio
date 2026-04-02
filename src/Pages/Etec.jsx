import React from "react";
import { motion } from "framer-motion";

const EtecStore = () => {
  return (
    <div className="w-full bg-white text-black px-4 md:px-12 md:mt-40 mt-32 select-none">
      {/* Heading */}
      <div className="flex justify-center text-center mb-10">
        <motion.h1
          className="text-4xl md:text-7xl font-bold uppercase"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Etec Store
        </motion.h1>
      </div>

      {/* Main Image */}
      <motion.div
        className="w-full flex justify-center mb-8"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/assets/https___etec-store.vercel.app_.jpg"
          alt="Etec Store"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-contain bg-gray-100 rounded-2xl shadow-[0_8px_15px_rgba(0,0,0,0.06)]"
          draggable={false}
        />
      </motion.div>

      {/* Details */}
      <motion.div
        className="max-w-[1000px] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 mb-6 text-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <p className="text-gray-700 text-xs sm:text-sm">Project Name</p>
          <h3 className="text-sm sm:text-base font-light">Etec Store</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs sm:text-sm">Type</p>
          <h3 className="text-sm sm:text-base font-light">E-commerce</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs sm:text-sm">Industry</p>
          <h3 className="text-sm sm:text-base font-light">Online Retail</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs sm:text-sm">Features</p>
          <h3 className="text-sm sm:text-base font-light">
            Cart, Products, UI
          </h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs sm:text-sm">Timeline</p>
          <h3 className="text-sm sm:text-base font-light">2–3 Weeks</h3>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-6 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>

        <p className="text-sm md:text-base leading-relaxed mb-3">
          Etec Store is a modern e-commerce web application designed to deliver
          a smooth and engaging online shopping experience. It focuses on clean
          UI, fast performance, and responsive design to ensure usability across
          all devices.
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          The platform allows users to browse products, view details, and manage
          their shopping cart efficiently. The project highlights strong
          frontend development skills along with structured component-based
          architecture.
        </p>
      </motion.div>

      {/* Image 2 */}
      <motion.div
        className="max-w-[1100px] mx-auto mt-8 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="/assets/https___etec-store.vercel.app_ (1).jpg"
          alt="Etec UI"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-contain bg-gray-100 rounded-2xl shadow-[0_8px_15px_rgba(0,0,0,0.06)]"
          draggable={false}
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div
        className="max-w-[1100px] mx-auto mt-6 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {/* <img
          src="/assets/https___etec-store.vercel.app_ (2).jpg"
          alt="Etec UI 2"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-contain bg-gray-100 rounded-2xl shadow-[0_8px_15px_rgba(0,0,0,0.06)]"
          draggable={false}
        /> */}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Technologies / Stack Used
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
          <span className="bg-gray-100 px-4 py-1 text-xs sm:text-sm rounded shadow-sm">
            React.js
          </span>
          <span className="bg-gray-100 px-4 py-1 text-xs sm:text-sm rounded shadow-sm">
            Tailwind CSS
          </span>
          <span className="bg-gray-100 px-4 py-1 text-xs sm:text-sm rounded shadow-sm">
            Framer Motion
          </span>
          <span className="bg-gray-100 px-4 py-1 text-xs sm:text-sm rounded shadow-sm">
            Context API
          </span>
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8 mb-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="https://etec-store.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-black border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white text-center transition"
        >
          View Live Project
        </a>

        <a
          href="https://github.com/Tooba-Saleem22/etec-store"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-black border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white text-center transition"
        >
          View on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default EtecStore;
