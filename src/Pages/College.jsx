import React from "react";
import { motion } from "framer-motion";

const College = () => {
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
          The College Cafe
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
          src="/assets/https___collegecafeeducation.com_ (1).jpg"
          alt="College Cafe"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
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
          <p className="text-gray-700 text-xs">Project Name</p>
          <h3 className="text-sm font-light">The College Cafe</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Platform</p>
          <h3 className="text-sm font-light">WordPress</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Industry</p>
          <h3 className="text-sm font-light">Education / Consulting</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Users</p>
          <h3 className="text-sm font-light">30K+ Students</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Timeline</p>
          <h3 className="text-sm font-light">2 Weeks</h3>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
        <p className="text-sm md:text-base leading-relaxed mb-3">
          The College Cafe is an educational consulting platform designed to
          help students secure admissions in top-tier universities, including
          Ivy League institutions. The website focuses on guiding students
          through a structured and data-driven application strategy.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          The platform highlights mentorship, personalized consulting, and a
          proven system that helps students build strong academic profiles and
          compelling application narratives.
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        className="max-w-[1100px] mx-auto mt-8 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="/assets/https___collegecafeeducation.com_.jpg"
          alt="College Cafe UI"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Features */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Key Features</h2>
        <ul className="text-sm md:text-base leading-relaxed list-disc pl-5 space-y-2">
          <li>Data-driven admission consulting strategy</li>
          <li>Personalized mentorship programs</li>
          <li>University-focused application guidance</li>
          <li>Clean and modern responsive UI</li>
          <li>Strong branding and storytelling sections</li>
          <li>Lead generation with call-to-action sections</li>
        </ul>
      </motion.div>

      {/* Stack */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Technologies / Stack Used
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">
            WordPress
          </span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">
            Elementor
          </span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">PHP</span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">MySQL</span>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8 mb-10 flex gap-4 flex-col sm:flex-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="https://collegecafeeducation.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
        >
          View Live Website
        </a>
      </motion.div>
    </div>
  );
};

export default College;
