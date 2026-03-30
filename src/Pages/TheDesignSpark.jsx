import React from "react";
import { motion } from "framer-motion";

const TheDesignSpark = () => {
  return (
    <div className="w-full bg-white text-black px-4 md:px-12 md:mt-40 mt-32  select-none">
      {/* Heading */}
      <div className="flex justify-center text-center mb-10">
        <motion.h1
          className="text-4xl md:text-7xl font-bold uppercase"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The Design Spark
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
          src="/assets/https___www.thedesignsparks.com_ (1).jpg"
          alt="The Design Spark"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Horizontal Details - 2 per row on mobile */}
      <motion.div
        className="max-w-[1000px] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 mb-6 text-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col gap-0 select-none pointer-events-none">
          <p className="text-gray-700 text-xs sm:text-sm leading-none">
            Project Name
          </p>
          <h3 className="text-sm sm:text-base font-light leading-none">
            TheDesignSpark
          </h3>
        </div>

        <div className="flex flex-col gap-0 select-none pointer-events-none">
          <p className="text-gray-700 text-xs sm:text-sm leading-none">
            Headquarters
          </p>
          <h3 className="text-sm sm:text-base font-light leading-none">
            Pakistan, US
          </h3>
        </div>

        <div className="flex flex-col gap-0 select-none pointer-events-none">
          <p className="text-gray-700 text-xs sm:text-sm leading-none">
            Industry
          </p>
          <h3 className="text-sm sm:text-base font-light leading-none">
            Software Development
          </h3>
        </div>

        <div className="flex flex-col gap-0 select-none pointer-events-none">
          <p className="text-gray-700 text-xs sm:text-sm leading-none">
            Company Size
          </p>
          <h3 className="text-sm sm:text-base font-light leading-none">
            50+ Employees
          </h3>
        </div>

        <div className="flex flex-col gap-0 select-none pointer-events-none">
          <p className="text-gray-700 text-xs sm:text-sm leading-none">
            Timeline
          </p>
          <h3 className="text-sm sm:text-base font-light leading-none">
            1 Month
          </h3>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-6 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
        <p className="text-black text-sm md:text-base leading-relaxed mb-3">
          TheDesignSpark is a professional portfolio website for a software
          house, designed to showcase the company's projects, expertise, and
          capabilities. It emphasizes clean visuals, intuitive navigation, and a
          modern design language to highlight the quality of work in software
          development.
        </p>
        <p className="text-black text-sm md:text-base leading-relaxed">
          This project demonstrates a responsive and user-friendly layout that
          effectively presents the company's services and accomplishments. It is
          crafted to attract potential clients and partners by providing a
          clear, engaging, and professional online presence.
        </p>
      </motion.div>

      {/* Project Images Section */}
      <motion.div
        className="max-w-[1100px] mx-auto mt-8 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="/assets/mock1.jpg"
          alt="Project Center"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Technologies / Stack Used */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8 px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Technologies / Stack Used
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            React.js
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            Tailwind CSS
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            Framer Motion
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            Node.js
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            Express
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-1 text-xs sm:text-sm font-medium shadow-sm rounded">
            MongoDB
          </span>
        </div>
      </motion.div>

      {/* Call to Action / Links */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8 mb-10 flex flex-col sm:flex-row justify-center items-center md:justify-start md:items-start gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="https://www.thedesignsparks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-black border border-black bg-transparent px-4 py-3 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:bg-black hover:text-white text-center"
        >
          View Live Project
        </a>

        <a
          href="https://github.com/Tooba-Saleem22/designspark-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-black border border-black bg-transparent px-4 py-3 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:bg-black hover:text-white text-center"
        >
          View on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default TheDesignSpark;
