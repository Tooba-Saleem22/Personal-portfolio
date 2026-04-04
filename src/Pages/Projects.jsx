import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import IdeaSection from "../components/IdeaSection";

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
                className="flex flex-col items-center cursor-pointer"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                onClick={() => project.path && navigate(project.path)}
              >
                {/* Image with proper hover pop-out */}
                <div className="w-[90%] md:w-[85%] h-[450px] rounded-2xl overflow-hidden relative shadow-lg">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top rounded-2xl"
                    whileHover={{
                      scale: 1.08,
                      y: -12,
                      boxShadow: "0px 20px 40px rgba(255,255,255,0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                </div>

                {/* Text + Button */}
                <div className="mt-8 text-center w-full flex flex-col items-center text-white">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <Button
                    text="View Project"
                    variant="dark"
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
      </div>

      <IdeaSection />
    </>
  );
};

export default Projects;
