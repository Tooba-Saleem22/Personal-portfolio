import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { title: "Freelancer", company: "Self-Employed", period: "2024 - Present" },
  {
    title: "WordPress Developer",
    company: "GMCH Technologies",
    period: "2024 - 2025",
  },
  {
    title: "Frontend Developer",
    company: "RaviNovus Tech",
    period: "2026 - Present",
  },
  { title: "Student", company: "UAJK", period: "2022 - Present" },
];

const WorkExperience = ({ bgColor = "bg-white", textColor = "text-black" }) => {
  return (
    <div
      className={`${bgColor} py-10 px-6 md:py-16 md:px-20 flex flex-col md:flex-row gap-10`}
    >
      {/* LEFT HEADING */}
      <motion.h2
        className={`text-3xl md:text-6xl font-bold uppercase text-center md:text-left flex-1 whitespace-nowrap ${textColor}`}
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Work <br />
        Experience
      </motion.h2>

      {/* RIGHT CONTENT */}
      <div className={`flex-1 max-w-[800px] ${textColor}`}>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="w-full flex flex-col gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-between w-full items-start">
                {/* Job title */}
                <p className="text-base md:text-xl lg:text-2xl font-semibold">
                  {exp.title}
                </p>

                {/* Company + period */}
                <div className="flex flex-col items-end">
                  <p className="text-sm md:text-lg font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs md:text-sm">{exp.period}</p>
                </div>
              </div>

              {/* Line */}
              {idx !== experiences.length - 1 && (
                <hr
                  className={`w-full border-t ${textColor.replace("text", "border")}/20 mt-4 mb-6`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
