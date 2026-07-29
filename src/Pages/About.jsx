import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowLeft,
  FiMail,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

/* ==================================================================== */
/* QUIET-LUXURY DESIGN TOKENS — matches Home.jsx / Services.jsx          */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];

const skillsData = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "WordPress Development",
  "Elementor",
  "REST APIs",
  "Figma to Code",
  "SEO & Web Optimization",
  "Git / GitHub",
];

const timelineData = [
  {
    step: "01",
    year: "Late 2023",
    title: "The Beginning",
    desc: "Started my freelancing journey with curiosity, exploring different paths and discovering how the digital world works.",
  },
  {
    step: "02",
    year: "2024",
    title: "WordPress & First Clients",
    desc: "Dived deep into WordPress development, started reaching out to clients, and closed my first freelance deals.",
  },
  {
    step: "03",
    year: "2025",
    title: "Custom Code & MERN Stack",
    desc: "Transitioned from page builders to custom development — mastering React.js and building full-stack MERN web applications.",
  },
  {
    step: "04",
    year: "2026",
    title: "Agency & Business Growth",
    desc: "Partnering with businesses and building my own web agency startup to deliver high-performing digital solutions.",
  },
];

const numbersData = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const faqsData = [
  {
    question: "What is your primary development tech stack?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Tailwind CSS for modern web apps. Additionally, I build custom, easy-to-manage sites using WordPress & Elementor.",
  },
  {
    question: "Are you available for full-time freelance or agency projects?",
    answer:
      "Yes! I collaborate directly with business owners, founders, and agencies on long-term contracts, custom project development, or agency partnerships.",
  },
  {
    question: "How do we collaborate on custom feature requests?",
    answer:
      "We begin with a thorough technical discovery process to scope out requirements, followed by milestone-based agile development with periodic demo updates.",
  },
];

const About = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HEADER — Back Home Button Placed Above Main Text Block           */}
      {/* ================================================================ */}
      <div className="w-full px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[#B08D57]/12 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
            {/* Left Text Block */}
            <div className="max-w-3xl">
              {/* Back Home Button directly above text */}
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#7C7266] hover:text-[#B08D57] transition-colors mb-6"
              >
                <FiArrowLeft /> Back Home
              </button>

              <motion.span
                className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                Full Stack Developer & Agency Founder
              </motion.span>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.02]"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: EASE }}
              >
                Hello, I'm{" "}
                <span className="font-serif italic lowercase font-light text-[#B08D57]">
                  Tooba
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-xl text-[#7C7266] text-base md:text-lg font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                A Full Stack Web Developer and entrepreneur building custom MERN
                stack applications, WordPress systems, and digital growth
                solutions for businesses.
              </motion.p>
            </div>

            {/* Profile Graphic Badge */}
            <motion.div
              className="relative shrink-0 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#B08D57]/15 to-transparent blur-xl -z-10" />
              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img
                  src="/assets/dp.jfif"
                  alt="Tooba Saleem"
                  className="w-full h-full object-cover object-top filter brightness-[1.01]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#171210] border border-[#B08D57]/40 flex flex-col items-center justify-center shadow-xl">
                <span className="font-serif italic text-xl text-[#D9C08C]">
                  T·S
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] text-[#B08D57] mt-1">
                  Est. Freelance
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PHILOSOPHY BANNER                                                */}
      {/* ================================================================ */}
      <div className="w-full bg-gradient-to-b from-[#FAF6EF] to-white py-16 px-6 text-center border-t border-[#B08D57]/15">
        <div className="max-w-4xl mx-auto py-6">
          <p className="font-serif italic text-2xl md:text-3xl text-[#3A2E1F] font-light leading-relaxed">
            "From exploring possibilities to building scalable digital solutions
            — growth comes from constant learning and continuous action."
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* WORKFLOW / JOURNEY TIMELINE — Left-Aligned Single Line Layout    */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Evolution & Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              The Real Journey
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#B08D57]/20 flex flex-col gap-10">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative bg-[#FAF6EF] p-6 sm:p-8 rounded-2xl border border-[#B08D57]/15 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true }}
              >
                {/* Connector Dot on Left Line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-8 w-5 h-5 rounded-full bg-[#FAF6EF] border-2 border-[#B08D57] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#B08D57]" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <span className="font-serif italic text-2xl text-[#D9C08C]">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1E1712] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#7C7266] text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SKILLS & EXPERTISE LIST                                         */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-[#B08D57]/15">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Technical Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Skills & Expertise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto">
            {skillsData.map((skill, idx) => (
              <motion.span
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white border border-[#B08D57]/15 text-sm font-medium text-[#3A2E1F] hover:border-[#B08D57]/40 hover:text-[#B08D57] transition-colors duration-300 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.03, ease: EASE }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* STATS STRIP — matches Services.jsx Estimation Section           */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-20 px-6 lg:px-20 relative overflow-hidden rounded-[30px] md:rounded-[50px] my-10 max-w-[1400px] mx-auto shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B08D57]/15 blur-[120px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {numbersData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-md"
            >
              <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                {item.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-300 mt-3 text-center font-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================ */}
      {/* FAQ SECTION — matches Services.jsx Dark Accordion              */}
      {/* ================================================================ */}
      <div className="w-full bg-[#0F0B09] text-[#FAF6EF] py-24 px-6 lg:px-20 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] block mb-3">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Get To Know Me
            </h2>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col gap-3">
            {faqsData.map((item, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-white/10 overflow-hidden bg-white/[0.02] rounded-xl px-4 md:px-6"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-5 focus:outline-none text-left"
                  >
                    <span
                      className={`font-medium text-base md:text-lg transition-colors duration-300 ${
                        isOpen ? "text-[#D9C08C]" : "text-white"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`text-lg ${
                        isOpen ? "text-[#D9C08C]" : "text-white"
                      }`}
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <div className="pb-6 text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* CLOSING CTA — matches Services.jsx                              */}
      {/* ================================================================ */}
      <div className="w-full px-6 py-24">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[30px] md:rounded-[50px] bg-[#171210] px-8 md:px-16 py-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B08D57]/15 blur-[140px] pointer-events-none" />

          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] mb-5 block relative z-10">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Let's build something{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              extraordinary together.
            </span>
          </h2>

          <motion.a
            href="mailto:toobasaleem190@gmail.com"
            className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B08D57] text-[#171210] font-bold text-sm uppercase tracking-widest relative z-10 hover:bg-[#D9C08C] transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail /> Get In Touch <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
