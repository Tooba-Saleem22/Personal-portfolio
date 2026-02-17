import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const projects = [
  {
    img: "/assets/thedesignspark.png",
    title: "Thedesignspark",
    // description: "Creative design and branding website",
  },
  {
    img: "/assets/lm.aivonx.com.png",
    title: "lm.aivonx",
    // description: "AI based marketing platform",
  },
  {
    img: "/assets/https___store.shoppsm.com_.jpg",
    title: "store.shoppsm",
    // description: "Ecommerce clothing store",
  },
  {
    img: "/assets/globalworkdigital.png",
    title: "Globalworkdigital",
    // description: "Digital agency website",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-white text-black py-10 px-4 md:py-16 md:px-20">
      <motion.h2
        className="text-4xl md:text-6xl font-bold uppercase text-center md:text-left mb-16"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text + Button */}
            <div className="mt-6 text-center w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Button text="View Project" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
