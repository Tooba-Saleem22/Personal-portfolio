import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const projects = [
  { img: "/assets/img1.png", title: "Thedesignspark", path: "/thedesignspark" },
  { img: "/assets/img2.png", title: "etec", path: "/Etec" },
  { img: "/assets/img3.png", title: "store.shoppsm", path: "/shoppsmstore" },
  {
    img: "/assets/img4.png",
    title: "The College Cafe",
    path: "/College",
  },
];

const Projects = () => {
  const navigate = useNavigate();

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
            className="flex flex-col items-center cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            onClick={() => project.path && navigate(project.path)}
          >
            {/* Image with hover pop-out effect */}
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg relative">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top rounded-xl"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </div>

            {/* Text + Button */}
            <div className="mt-6 text-center w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

              <Button
                text="View Project"
                onClick={(e) => {
                  e.stopPropagation();
                  project.path && navigate(project.path);
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
