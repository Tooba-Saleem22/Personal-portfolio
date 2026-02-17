import React from "react";
import { motion } from "framer-motion";

const processes = [
  {
    title: "Research & Planning",
    description:
      "I analyze your needs and goals to create a clear roadmap for your project, ensuring every step is well-planned and efficient.",
  },
  {
    title: "Design & Prototyping",
    description:
      "I craft clean, modern interfaces and interactive prototypes to visualize your website before development begins.",
  },
  {
    title: "Development & Coding",
    description:
      "I build responsive, fast, and functional websites using the latest technologies like React, WordPress, or Shopify.",
  },
  {
    title: "Testing & Launch",
    description:
      "I perform thorough testing for usability, speed, and compatibility to make sure your website works flawlessly before going live.",
  },
  {
    title: "Maintenance & Support",
    description:
      "After launch, I provide ongoing support and updates to keep your website running smoothly and up-to-date.",
  },
];

const WorkingProcess = () => {
  return (
    <div className="w-full bg-white text-black py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left heading */}
        <motion.div
          className="w-full md:w-1/4 flex flex-col justify-start items-center md:items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-center md:text-left">
            WORKING PROCESS
          </h2>
        </motion.div>

        {/* Right content */}
        <div className="w-full md:w-3/4 md:ml-48 md:mt-4 flex flex-col gap-8 md:gap-12">
          {processes.map((proc, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-start text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <div className="w-full md:w-[180px] flex-shrink-0">
                <h3 className="text-base md:text-lg font-bold">{proc.title}</h3>
              </div>

              {/* Description */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm md:text-base max-w-full leading-snug break-words">
                  {proc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
