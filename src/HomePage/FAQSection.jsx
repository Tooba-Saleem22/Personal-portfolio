import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import IdeaSection from "../components/IdeaSection";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in Frontend, WordPress, and Full Stack development, delivering responsive and user-friendly websites.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Standard projects are usually completed within 1–2 weeks, while more extensive projects may take 3–6 weeks.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Pricing is based on project scope, complexity, and requirements. Custom quotes are provided for transparency.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, I provide ongoing website maintenance, updates, and support after launch to ensure smooth performance.",
  },
  {
    question: "Do you work with individuals, startups, or businesses?",
    answer:
      "I work with clients of all sizes, including individuals, startups, and established businesses.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full bg-black text-white py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
        <motion.h2
          className="text-4xl md:text-6xl md:mt-16 font-bold uppercase text-white text-center md:text-left mb-8 md:mb-16 flex-1"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FAQs
        </motion.h2>

        {/* Right FAQs */}
        <div className="flex-5 flex md:mr-14 md:-mt-32 justify-start md:justify-end">
          <div className="w-full md:w-3/4 flex flex-col gap-0 md:gap-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                className="border-b border-gray-300 overflow-hidden last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 bg-transparent focus:outline-none text-left"
                >
                  <span className="font-semibold text-white text-lg md:text-xl text-left">
                    {item.question}
                  </span>
                  <span className="ml-2 text-white text-xl">
                    {activeIndex === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      className="px-6 py-4 text-white text-base md:text-lg"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Idea Section at the very bottom */}
      <IdeaSection />
    </>
  );
};

export default FAQSection;
