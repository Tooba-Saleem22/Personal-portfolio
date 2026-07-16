import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiArrowUpRight,
  FiArrowRight,
  FiLayers,
  FiCheckCircle,
  FiCompass,
  FiCpu,
  FiAward,
  FiMail,
} from "react-icons/fi";
import Button from "../components/Button";

/* ==================================================================== */
/* QUIET-LUXURY DESIGN TOKENS — Ivory / Espresso / Antique Gold        */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];
const GOLD = "#B08D57"; // Antique brass gold — primary accent
const GOLD_LIGHT = "#D9C08C"; // Champagne highlight
const ESPRESSO = "#171210"; // Warm near-black, not pure black
const ESPRESSO_DEEP = "#0F0B09"; // Darkest section (FAQ)
const TEXT_DARK = "#1E1712";
const TEXT_MUTED = "#7C7266";

const numbersData = [
  { value: "3+", label: "Years of Freelancing" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const processData = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your brand vision, target audience, and structuring a tailored layout and information map.",
  },
  {
    step: "02",
    title: "Aesthetic Web Design",
    desc: "Crafting refined premium interfaces with restrained tones, sleek typography, and pixel-perfect responsiveness.",
  },
  {
    step: "03",
    title: "Clean Code Execution",
    desc: "Developing with blazing fast React architectures or versatile custom WordPress structures.",
  },
];

const valuesData = [
  {
    icon: FiCompass,
    title: "Clear Direction",
    desc: "Every project starts with a strategy, not a template — so the final site actually serves your goals.",
  },
  {
    icon: FiCpu,
    title: "Engineering Rigour",
    desc: "Clean, maintainable code across React and WordPress, built to stay fast as it scales.",
  },
  {
    icon: FiAward,
    title: "Considered Craft",
    desc: "Nothing ships until the spacing, type, and motion feel deliberate — not just finished.",
  },
  {
    icon: FiCheckCircle,
    title: "Dependable Delivery",
    desc: "Transparent timelines and ongoing support, so launch day isn't the end of the relationship.",
  },
];

const servicesData = [
  {
    number: "01",
    title: "Web Design",
    items: ["Layout", "Colors", "UI"],
    description:
      "Clean and modern layouts that make your website look professional, attractive, and easy to use on every device.",
  },
  {
    number: "02",
    title: "Frontend Development",
    items: ["React", "UI", "Interactive Design"],
    description:
      "Fast and responsive websites built with clean code and smooth user experience.",
  },
  {
    number: "03",
    title: "WordPress Websites",
    items: ["Elementor", "Blogs", "Business Sites"],
    description:
      "Easy to manage WordPress websites for businesses, portfolios, and personal brands.",
  },
  {
    number: "04",
    title: "Shopify Stores",
    items: ["Products", "Payments", "Design"],
    description:
      "Complete online stores that are ready to sell, with beautiful design and smooth checkout.",
  },
  {
    number: "05",
    title: "UI to Website",
    items: ["Figma", "XD", "PSD"],
    description:
      "I convert your designs into fully working, responsive websites with pixel-perfect layout.",
  },
  {
    number: "06",
    title: "Website Redesign",
    items: ["Speed", "Mobile", "Modern Look"],
    description:
      "I improve old or broken websites by giving them a fresh design, better layout, and smoother performance.",
  },
];

const projectsData = [
  {
    img: "/assets/img1.png",
    title: "Thedesignspark",
    category: "Web Development",
    path: "/Thedesignspark",
  },
  {
    img: "/assets/img2.png",
    title: "Etec Website",
    category: "Custom Frontend",
    path: "/Etec",
  },
  {
    img: "/assets/img3.png",
    title: "store.shoppsm",
    category: "E-Commerce",
    path: "/shoppsmstore",
  },
  {
    img: "/assets/img4.png",
    title: "The College Cafe",
    category: "Brand Website",
    path: "/College",
  },
  {
    img: "/assets/img5.png",
    title: "Upcoming Premium Project 01",
    category: "UI & Design",
    path: "#",
  },
  {
    img: "/assets/img6.png",
    title: "Upcoming Premium Project 02",
    category: "WordPress Custom",
    path: "#",
  },
];

const faqsData = [
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

const parseNumberValue = (value) => {
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { num, suffix };
};

const Home = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [numbersInView, setNumbersInView] = useState(false);
  const [counts, setCounts] = useState(numbersData.map(() => 0));

  useEffect(() => {
    if (!numbersInView) return;
    const duration = 2000;
    const startTime = performance.now();
    let raf;

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 5);
      setCounts(
        numbersData.map((item) => {
          const { num } = parseNumberValue(item.value);
          return Math.floor(easeProgress * num);
        }),
      );
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [numbersInView]);

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HERO SECTION                                                     */}
      {/* ================================================================ */}
      <div className="w-full min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-[#B08D57]/12 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#D9C08C]/15 pointer-events-none" />

        <div className="max-w-[1200px] w-full text-center flex flex-col items-center justify-center relative z-10">
          <motion.div
            className="flex items-center gap-2.5 mb-8 px-6 py-2 rounded-full border border-[#B08D57]/25 bg-white/70 backdrop-blur-xl shadow-[0_4px_20px_rgba(176,141,87,0.08)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B08D57]" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7C7266] font-bold">
              Available for Bespoke High-End Development
            </span>
          </motion.div>

          <motion.h4
            className="text-2xl md:text-3xl font-light tracking-wide text-[#7C7266] mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hello, I am{" "}
            <span className="font-serif italic font-normal text-[#8A6C3F]">
              Tooba
            </span>
          </motion.h4>

          <motion.h1
            className="text-[2.7rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold text-[#1E1712] leading-[1.02] tracking-tight max-w-5xl uppercase"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          >
            Crafting Digital Elegant{" "}
            <span className="font-serif italic font-light text-[#B08D57] lowercase">
              solutions
            </span>{" "}
            & Code.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-[#7C7266] text-base md:text-lg font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A premium portfolio space tailored for custom web development, clean
            MERN deployments, and immaculate WordPress layouts.
          </motion.p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PHILOSOPHY QUOTE SECTION                                         */}
      {/* ================================================================ */}
      <div className="w-full bg-gradient-to-b from-[#FAF6EF] to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto border-y border-[#B08D57]/20 py-12">
          <p className="font-serif italic text-2xl md:text-3xl text-[#3A2E1F] font-light leading-relaxed">
            "Design is not just what it looks like and feels like. Design is how
            it seamlessly functions under elegant lines of code."
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* ABOUT SECTION                                                    */}
      {/* ================================================================ */}
      <div className="w-full bg-white relative z-20 py-24 shadow-[0_-10px_40px_rgba(176,141,87,0.03)]">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 gap-16">
          <motion.div
            className="flex flex-col gap-6 lg:w-1/2 w-full text-center lg:text-left items-center lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-[#F1E9DA] rounded-md">
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#B08D57]">
                The Designer & Dev
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1E1712]">
              Aesthetically Driven, <br />
              Driven By Code.
            </h2>

            <p className="text-[#7C7266] text-base md:text-lg leading-relaxed font-light">
              I am a specialized web developer focusing on premium layouts and
              seamless modern interfaces. My vision pairs restrained, elevated
              tones and clean grids with pixel-perfect frontend engineering to
              provide businesses an unforgettable brand identity online.
            </p>

            <Button
              text="Let's Collaborate"
              className="mt-4 shadow-lg shadow-[#B08D57]/15 bg-[#B08D57] text-white hover:bg-[#8A6C3F] transition-all duration-300"
              onClick={() =>
                (window.location.href = "mailto:toobasaleem190@gmail.com")
              }
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center w-full relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#B08D57]/15 to-transparent blur-xl -z-10" />
            <div className="w-full max-w-sm h-[470px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="/assets/dp.jfif"
                alt="Tooba Saleem Portfolio"
                className="w-full h-full object-cover object-top filter brightness-[1.01]"
              />
            </div>

            {/* Signature monogram seal */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#171210] border border-[#B08D57]/40 flex flex-col items-center justify-center shadow-xl"
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              viewport={{ once: true }}
            >
              <span className="font-serif italic text-2xl text-[#D9C08C]">
                T·S
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-[#B08D57] mt-1">
                Est. Freelance
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* THE PROCESS SECTION                                              */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              How I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#B08D57]/15 relative shadow-sm group hover:shadow-md transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* WHY WORK WITH ME — VALUES STRIP                                  */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              The Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#FAF6EF] border border-[#B08D57]/10 hover:border-[#B08D57]/30 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: EASE }}
                  viewport={{ once: true }}
                >
                  <div className="w-11 h-11 rounded-full bg-[#171210] flex items-center justify-center mb-5">
                    <Icon className="text-[#D9C08C] text-lg" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E1712] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#7C7266] text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* NUMBERS SECTION                                                  */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-24 px-6 lg:px-20 relative overflow-hidden rounded-[30px] md:rounded-[50px] my-10 max-w-[1400px] mx-auto shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B08D57]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-[#D9C08C] uppercase tracking-widest text-xs font-bold block mb-3">
              Metrics of Trust
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              Proven <br />
              <span className="text-[#D9C08C] font-serif italic lowercase font-normal">
                results
              </span>
            </h2>
          </div>

          <motion.div
            className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
            onViewportEnter={() => setNumbersInView(true)}
            viewport={{ once: true, amount: 0.4 }}
          >
            {numbersData.map((item, idx) => {
              const { suffix } = parseNumberValue(item.value);
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start p-6 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-md"
                >
                  <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tight text-white">
                    {counts[idx]}
                    <span className="text-[#D9C08C]">{suffix}</span>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-300 mt-3 text-center lg:text-left">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SERVICES SECTION                                                 */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-3">
              Expertise Store
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Professional Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                className="group bg-[#FAF6EF]/40 hover:bg-white p-8 rounded-2xl border border-[#B08D57]/10 hover:border-[#B08D57]/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: EASE }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-[#B08D57] font-bold bg-[#F1E9DA] px-2.5 py-1 rounded">
                      [{service.number}]
                    </span>
                    <FiLayers className="text-neutral-300 group-hover:text-[#B08D57] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1712] mb-3 group-hover:text-[#8A6C3F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#7C7266] text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                  {service.items.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-neutral-100 text-[#7C7266] px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PREMIUM PROJECTS GRID                                            */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-b border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-2">
                Showcase Studio
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#1E1712]">
                Selected Works
              </h2>
            </div>
            <p className="text-[#7C7266] font-light max-w-xs text-sm md:text-right">
              A curated selection of dynamic storefronts, WordPress layouts, and
              React architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#B08D57]/10"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: EASE }}
                viewport={{ once: true }}
                onClick={() => project.path !== "#" && navigate(project.path)}
              >
                <div className="w-full h-[300px] overflow-hidden relative bg-neutral-50 border-b border-neutral-100">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171210]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                    <span className="text-white text-xs font-medium tracking-widest uppercase flex items-center gap-1">
                      Explore Case <FiArrowUpRight />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B08D57] font-bold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1E1712] group-hover:text-[#8A6C3F] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-50 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-light">
                      Interactive Case
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F1E9DA] group-hover:bg-[#B08D57] text-[#B08D57] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <FiArrowUpRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FAQ SECTION                                                      */}
      {/* ================================================================ */}
      <div className="w-full bg-[#0F0B09] text-[#FAF6EF] py-24 px-6 lg:px-20">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] block mb-3">
              Support FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Common Queries
            </h2>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col gap-3">
            {faqsData.map((item, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-white/10 overflow-hidden bg-white/[0.02] rounded-xl px-4 md:px-6"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
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
      {/* FINAL CTA SECTION (replaces IdeaSection)                         */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[30px] md:rounded-[50px] bg-[#171210] px-8 md:px-16 py-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B08D57]/15 blur-[140px] pointer-events-none" />

          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] mb-5 block relative z-10">
            Start a Project
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Let's create something{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              remarkable
            </span>{" "}
            together.
          </h2>
          <p className="mt-6 text-neutral-300 font-light max-w-md mx-auto relative z-10">
            Have a brief in mind? Tell me about it and I'll get back to you
            within a day.
          </p>

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

export default Home;
