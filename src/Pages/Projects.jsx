import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import IdeaSection from "../components/IdeaSection";

const projects = [
  {
    img: "/assets/thedesignspark.png",
    title: "Thedesignspark",
  },
  {
    img: "/assets/lm.aivonx.com.png",
    title: "lm.aivonx",
  },
  {
    img: "/assets/https___store.shoppsm.com_.jpg",
    title: "store.shoppsm",
  },
  {
    img: "/assets/globalworkdigital.png",
    title: "Globalworkdigital",
  },
];

const Projects = () => {
  return (
    <>
      <div className="w-full bg-white text-black mt-40">
        {/* Center Heading */}
        <motion.h2
          className="text-5xl md:text-9xl font-bold uppercase text-center mb-20 leading-none"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <br /> Projects
        </motion.h2>

        {/* Black Projects Section */}
        <div className="bg-black rounded-t-[40px] md:rounded-t-[140px] pt-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Image with hover animation */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="w-[90%] md:w-[85%] h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-white/15 cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* Text + Button */}
                <div className="mt-8 text-center w-full flex flex-col items-center text-white">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <Button text="View Project" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Idea Section at bottom */}
      <IdeaSection />
    </>
  );
};

export default Projects;
