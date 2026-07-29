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
/* QUIET-LUXURY DESIGN TOKENS — matches Home.jsx / Projects.jsx         */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];

const servicesData = [
  {
    number: "01",
    title: "Full Stack Development",
    tagline: "End-to-end web applications built with MERN stack",
    description:
      "Complete, scalable web applications built from scratch using MongoDB, Express.js, React.js, and Node.js. From database architecture and secure APIs to a responsive frontend UI.",
    deliverables: [
      "Custom MERN stack architecture",
      "RESTful API design & integration",
      "Database schema & authentication",
      "Deployment & server setup",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    number: "02",
    title: "Frontend Development",
    tagline: "Fast, interactive, and responsive React interfaces",
    description:
      "High-performance user interfaces built with React.js and modern tooling. Clean component structure, smooth animations, and optimized state management for seamless user experiences.",
    deliverables: [
      "React component architecture",
      "Interactive UI & animations",
      "Responsive layout for all devices",
      "State management & API integration",
    ],
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
  {
    number: "03",
    title: "Backend & API Development",
    tagline: "Secure, robust server-side systems",
    description:
      "Scalable backend architectures built with Node.js and Express.js, integrated with MongoDB databases. Reliable business logic, middleware configuration, and secure API endpoints.",
    deliverables: [
      "REST API design & integration",
      "Database modeling & queries",
      "User authentication & authorization",
      "Server performance optimization",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    number: "04",
    title: "WordPress Development",
    tagline: "Custom CMS setups that are simple to manage",
    description:
      "Custom WordPress builds tailored to your specific functionality requirements. Designed so you can manage, edit, and expand your site content effortlessly without writing code.",
    deliverables: [
      "Custom theme & Elementor builds",
      "Plugin configuration & setup",
      "CMS & blog structure",
      "Walkthrough & content training",
    ],
    tags: ["WordPress", "Elementor", "CMS", "Custom Themes"],
  },
  {
    number: "05",
    title: "UI/Design to Code",
    tagline: "Converting Figma or XD files into functional React code",
    description:
      "Already have your design ready in Figma, XD, or PSD? I transform your visuals into pixel-perfect, clean, and responsive React.js components matching every exact detail.",
    deliverables: [
      "Pixel-precise implementation",
      "Fully responsive breakpoints",
      "Interactive UI state logic",
      "Clean & reusable codebase",
    ],
    tags: ["Figma to React", "XD to React", "PSD to Code"],
  },
  {
    number: "06",
    title: "Web App Refactoring & Optimization",
    tagline: "Upgrade and speed up your existing web application",
    description:
      "For existing sites or apps that are slow, complex to maintain, or outdated. I audit your code, refactor frontend components, rebuild backend logic, and optimize speed.",
    deliverables: [
      "Codebase & performance audit",
      "Full stack refactoring",
      "Speed & database optimization",
      "Bug fixes & feature updates",
    ],
    tags: ["Refactoring", "Performance", "Code Audit"],
  },
];

const processData = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We discuss your project goals, technical requirements, stack selection, and functionality needs — setting up a realistic milestone plan.",
  },
  {
    step: "02",
    title: "Development & Testing",
    desc: "I write clean code for your frontend, backend, or full application, providing progressive functional demos for your feedback along the way.",
  },
  {
    step: "03",
    title: "Deployment & Support",
    desc: "We deploy the application smoothly to production. I provide continuous post-launch support and bug fixes to keep everything running.",
  },
];

const faqsData = [
  {
    question: "Do you design websites or just write code?",
    answer:
      "I focus on web development (Full Stack MERN & WordPress). If you already have design files (Figma/XD/PSD), I convert them accurately into functional code. If not, I can work with your existing brand guidelines to build modern layouts.",
  },
  {
    question: "Can you handle both backend and frontend tasks?",
    answer:
      "Yes! As a MERN stack developer, I work on both client-side React code and server-side Node.js / Express / MongoDB architecture.",
  },
  {
    question: "What do you need from me to start a project?",
    answer:
      "Project specifications, technical goals, design files (if available), and relevant API/asset details. If you're unsure, we can define the scope together during planning.",
  },
  {
    question: "Is post-launch support included?",
    answer:
      "Yes — every development project includes post-launch testing and bug-fixing support to ensure everything runs smoothly in production.",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [openService, setOpenService] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
      {/* ================================================================ */}
      <div className="w-full px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[#B08D57]/12 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#7C7266] hover:text-[#B08D57] transition-colors mb-10"
          >
            <FiArrowLeft /> Back Home
          </button>

          <motion.span
            className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Technical Expertise
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.02] max-w-4xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            Development{" "}
            <span className="font-serif italic lowercase font-light text-[#B08D57]">
              services
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[#7C7266] text-base md:text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Full stack MERN web applications, standalone React frontends, robust
            Node/Express backends, and WordPress solutions built for reliability
            and scale.
          </motion.p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SERVICES — EDITORIAL ACCORDION LIST                              */}
      {/* ================================================================ */}
      <div className="w-full px-6 pb-24">
        <div className="max-w-[1100px] mx-auto flex flex-col border-t border-[#B08D57]/15">
          {servicesData.map((service, idx) => {
            const isOpen = openService === idx;
            return (
              <div key={idx} className="border-b border-[#B08D57]/15">
                <button
                  onClick={() => setOpenService(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={`font-serif italic text-3xl md:text-4xl font-light transition-colors duration-300 ${
                        isOpen ? "text-[#B08D57]" : "text-[#D9C08C]/70"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl md:text-4xl font-extrabold uppercase tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-[#B08D57]" : "text-[#1E1712]"
                        } group-hover:text-[#B08D57]`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#7C7266] text-sm md:text-base font-light mt-1 hidden md:block">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#171210] border-[#171210] text-[#D9C08C]"
                        : "border-[#B08D57]/25 text-[#B08D57] group-hover:border-[#B08D57]"
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
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <div className="pb-10 pl-0 md:pl-[4.5rem] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
                        <p className="text-[#3A2E1F] text-base font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="bg-white rounded-2xl border border-[#B08D57]/12 p-6">
                          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B08D57] block mb-4">
                            What's Included
                          </span>
                          <ul className="flex flex-col gap-2.5 mb-6">
                            {service.deliverables.map((d, i) => (
                              <li
                                key={i}
                                className="text-sm text-[#3A2E1F] font-light flex items-start gap-2.5"
                              >
                                <span className="mt-2 w-1 h-1 rounded-full bg-[#B08D57] shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-[11px] bg-[#F1E9DA] text-[#7C7266] px-2.5 py-0.5 rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================================ */}
      {/* ENGAGEMENT PROCESS                                               */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Development Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              How We Build Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processData.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-[#FAF6EF] p-8 rounded-2xl border border-[#B08D57]/10 relative shadow-sm group hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true }}
              >
                <span className="text-5xl font-serif italic text-[#D9C08C]/60 font-light block mb-4 group-hover:text-[#B08D57]/70 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#1E1712] mb-2">
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
      {/* PRICING NOTE                                                     */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-20 px-6 lg:px-20 relative overflow-hidden rounded-[30px] md:rounded-[50px] my-10 max-w-[1400px] mx-auto shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B08D57]/15 blur-[120px] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <span className="text-[#D9C08C] uppercase tracking-widest text-xs font-bold block mb-4">
            Project Estimation
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-5">
            Tailored to Scope & Requirements
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
            Every technical brief has distinct performance, database, and
            feature requirements. Share your scope and I'll provide a detailed
            technical roadmap and transparent estimate.
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FAQ SECTION                                                      */}
      {/* ================================================================ */}
      <div className="w-full bg-[#0F0B09] text-[#FAF6EF] py-24 px-6 lg:px-20 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] block mb-3">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Before You Reach Out
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
                      className={`font-medium text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-[#D9C08C]" : "text-white"}`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`text-lg ${isOpen ? "text-[#D9C08C]" : "text-white"}`}
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
      {/* CLOSING CTA                                                      */}
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
            Ready When You Are
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Let's build{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              your project
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

export default Services;
