import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiArrowUpRight,
  FiArrowRight,
  FiTerminal,
  FiCpu,
  FiCode,
  FiDatabase,
  FiMail,
  FiGitBranch,
  FiStar,
} from "react-icons/fi";
import Button from "../components/Button";

/* ==================================================================== */
/* MOTION VARIANTS & EASE CURVES                                         */
/* ==================================================================== */
const EASE_LUXURY = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_LUXURY },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const hoverCardEffect = {
  rest: { y: 0, scale: 1, boxShadow: "0px 4px 20px rgba(0,0,0,0.02)" },
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow: "0px 20px 40px rgba(176, 141, 87, 0.12)",
    transition: { duration: 0.3, ease: EASE_LUXURY },
  },
};

/* ==================================================================== */
/* DATA SOURCES                                                         */
/* ==================================================================== */
const techBadges = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "WordPress Custom",
  "WooCommerce",
  "Tailwind CSS",
  "REST APIs",
  "JavaScript ES6+",
];

const numbersData = [
  { value: "3+", label: "Years Engineering Web Solutions" },
  { value: "20+", label: "Full-Stack & CMS Deployments" },
  { value: "10+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const processData = [
  {
    step: "01",
    title: "Architecture & Schema Setup",
    desc: "Analyzing project requirements, mapping database schemas, choosing the optimal tech stack (MERN vs WordPress), and planning scalable system architecture.",
  },
  {
    step: "02",
    title: "Clean Code Engineering",
    desc: "Writing modular React components, building secure REST APIs with Node/Express, or developing custom WordPress themes with clean PHP & Tailwind.",
  },
  {
    step: "03",
    title: "Optimization & Cloud Launch",
    desc: "Database query tuning, cross-browser performance testing, API endpoint security, and seamless deployment to Vercel, VPS, or web hosting.",
  },
];

const valuesData = [
  {
    icon: FiTerminal,
    title: "Clean Codebase",
    desc: "Modular, fully documented React components and WordPress structures designed for long-term maintainability.",
  },
  {
    icon: FiCpu,
    title: "Speed & Performance",
    desc: "Optimized React state management, fast REST API responses, and lightweight WordPress builds for max Lighthouse scores.",
  },
  {
    icon: FiDatabase,
    title: "Full-Stack Architecture",
    desc: "End-to-end capabilities from dynamic frontend interfaces to MongoDB schema design and server management.",
  },
  {
    icon: FiGitBranch,
    title: "Reliable Execution",
    desc: "Strict version control with Git, structured testing, transparent timelines, and continuous post-launch support.",
  },
];

const servicesData = [
  {
    number: "01",
    title: "MERN Stack Development",
    items: ["React.js", "Node.js", "Express", "MongoDB"],
    description:
      "Custom full-stack web applications engineered with MERN—fast, secure, and built to scale effortlessly with complex business logic.",
  },
  {
    number: "02",
    title: "Custom WordPress Engineering",
    items: ["Custom Themes", "Elementor", "WooCommerce", "CMS Architecture"],
    description:
      "Bespoke WordPress websites with lightweight custom theme development, tailored WooCommerce stores, and client-friendly dashboards.",
  },
  {
    number: "03",
    title: "Frontend Development",
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs"],
    description:
      "Transforming complex UI/UX designs into pixel-perfect, highly responsive frontend web interfaces integrated seamlessly with backend APIs.",
  },
  {
    number: "04",
    title: "API & Backend Systems",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    description:
      "Designing secure RESTful APIs, database schema modeling, authentication workflows, and third-party API integrations.",
  },
  {
    number: "05",
    title: "E-Commerce Solutions",
    items: ["WooCommerce", "Shopify", "Payment Gateways", "Custom Flow"],
    description:
      "Scalable e-commerce store architecture, custom catalog views, optimized checkout flows, and secure multi-currency payment setups.",
  },
  {
    number: "06",
    title: "Web Performance & Refactoring",
    items: ["Core Web Vitals", "Code Audit", "SEO Basics", "Bug Fixes"],
    description:
      "Refactoring legacy code, fixing frontend/backend bugs, optimizing page speed, and enhancing overall user experience metrics.",
  },
];

const projectsData = [
  {
    img: "/assets/img1.png",
    title: "Thedesignspark",
    category: "Full-Stack Web Application",
    path: "/Thedesignspark",
  },
  {
    img: "/assets/img2.png",
    title: "Etec Web App",
    category: "Custom React Frontend",
    path: "/Etec",
  },
  {
    img: "/assets/img3.png",
    title: "store.shoppsm",
    category: "E-Commerce Platform",
    path: "/shoppsmstore",
  },
  {
    img: "/assets/img4.png",
    title: "The College Cafe",
    category: "WordPress Business Platform",
    path: "/College",
  },
  {
    img: "/assets/img5.png",
    title: "Upcoming Full-Stack Platform",
    category: "MERN Stack Build",
    path: "#",
  },
  {
    img: "/assets/img6.png",
    title: "Upcoming Enterprise CMS",
    category: "WordPress Custom Development",
    path: "#",
  },
];

const faqsData = [
  {
    question: "What core tech stack do you specialize in?",
    answer:
      "I specialize in full-stack MERN development (MongoDB, Express.js, React.js, Node.js) as well as custom WordPress theme & plugin integration.",
  },
  {
    question:
      "Can you convert Figma/XD designs into functional web applications?",
    answer:
      "Yes, I convert Figma or XD UI components into pixel-perfect React builds or fully customizable, lightweight WordPress themes with zero bloat.",
  },
  {
    question: "How long does a typical web development project take?",
    answer:
      "Standard WordPress or landing page builds usually take 1–2 weeks, while full-stack MERN applications take 3–6 weeks depending on feature complexity.",
  },
  {
    question:
      "Do you handle custom backend architectures and database modeling?",
    answer:
      "Yes, I build secure RESTful APIs using Node.js and Express, handle MongoDB database design, implement JWT authentication, and integrate third-party APIs.",
  },
  {
    question: "Do you provide post-launch maintenance and technical support?",
    answer:
      "Yes, I offer ongoing technical maintenance, performance monitoring, server setup, bug fixing, and continuous feature updates.",
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
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased overflow-x-hidden">
      {/* ================================================================ */}
      {/* HERO SECTION                                                     */}
      {/* ================================================================ */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 md:pt-32 pb-16 relative">
        {/* Animated Background Orbs (Responsive sizes) */}
        <motion.div
          className="absolute top-[-5%] left-[-20%] md:left-[-10%] w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] rounded-full blur-[100px] md:blur-[180px] bg-[#B08D57]/15 pointer-events-none"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[-20%] md:right-[-10%] w-[300px] sm:w-[450px] md:w-[650px] h-[300px] sm:h-[450px] md:h-[650px] rounded-full blur-[90px] md:blur-[160px] bg-[#D9C08C]/20 pointer-events-none"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-[1250px] w-full text-center flex flex-col items-center justify-center relative z-10">
          {/* Status Badge */}
          <motion.div
            className="flex items-center gap-2 mb-6 md:mb-8 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-[#B08D57]/30 bg-white/80 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
          >
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#B08D57]" />
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.25em] text-[#5C5247] font-semibold">
              Full-Stack MERN & WordPress Engineer
            </span>
          </motion.div>

          <motion.h4
            className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-[#7C7266] mb-3 md:mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Hello, I am{" "}
            <span className="font-serif italic font-normal text-[#8A6C3F]">
              Tooba Saleem
            </span>
          </motion.h4>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#1E1712] leading-[1.1] md:leading-[1.04] tracking-tight max-w-5xl uppercase px-2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_LUXURY }}
          >
            Engineering Custom Web Apps{" "}
            <span className="font-serif italic font-light text-[#B08D57] lowercase block sm:inline">
              & Modern
            </span>{" "}
            CMS Architecture.
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 max-w-2xl text-[#6B6155] text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Full-Stack Web Developer crafting scalable MERN applications,
            high-performance REST APIs, and bespoke WordPress builds focused on
            clean code and speed.
          </motion.p>

          {/* Badges Stack */}
          <motion.div
            className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl px-2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {techBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-xs font-mono bg-white/70 text-[#3A2E1F] border border-[#B08D57]/25 shadow-sm backdrop-blur-sm"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* INFINITE MARQUEE STRIP                                           */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#D9C08C] py-3.5 md:py-4 border-y border-[#B08D57]/30 overflow-hidden relative shadow-inner">
        <motion.div
          className="flex whitespace-nowrap gap-6 md:gap-12 text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.25em] uppercase font-bold"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 md:gap-12 items-center shrink-0">
              <span>Full-Stack Development</span>
              <FiStar className="text-[#B08D57]" />
              <span>MERN Stack Architecture</span>
              <FiStar className="text-[#B08D57]" />
              <span>Custom WordPress Themes</span>
              <FiStar className="text-[#B08D57]" />
              <span>RESTful APIs & Node.js</span>
              <FiStar className="text-[#B08D57]" />
              <span>WooCommerce Engineering</span>
              <FiStar className="text-[#B08D57]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* PHILOSOPHY STATEMENT                                             */}
      {/* ================================================================ */}
      <div className="w-full bg-gradient-to-b from-[#FAF6EF] via-white to-white py-14 md:py-20 px-4 sm:px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto border-y border-[#B08D57]/20 py-8 md:py-12 relative px-2"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 md:px-4">
            <FiCode className="text-[#B08D57] text-lg md:text-xl" />
          </div>
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#2C231A] font-light leading-relaxed">
            "High-end web engineering connects responsive frontend experience
            with robust backend database design — code that is fast, secure, and
            built to scale."
          </p>
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* ABOUT SECTION                                                    */}
      {/* ================================================================ */}
      <div className="w-full bg-white relative z-20 py-16 md:py-24 shadow-[0_-10px_40px_rgba(176,141,87,0.03)]">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 gap-10 md:gap-16">
          <motion.div
            className="flex flex-col gap-4 md:gap-6 lg:w-1/2 w-full text-center lg:text-left items-center lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-[#F1E9DA] rounded-md">
              <span className="text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold text-[#B08D57]">
                Full-Stack & CMS Developer
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1E1712] leading-tight">
              Scalable Systems <br className="hidden sm:inline" />& Modern Code.
            </h2>

            <p className="text-[#7C7266] text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
              I specialize in developing end-to-end web applications utilizing
              the MERN stack (MongoDB, Express, React, Node.js) along with
              custom WordPress theme solutions. My goal is to build
              well-structured, maintainable code bases that give businesses
              complete control, high reliability, and fast load speeds.
            </p>

            <Button
              text="Let's Build Together"
              className="mt-2 md:mt-4 shadow-xl shadow-[#B08D57]/15 bg-[#B08D57] text-white hover:bg-[#8A6C3F] transition-all duration-300 w-full sm:w-auto"
              onClick={() =>
                (window.location.href = "mailto:toobasaleem190@gmail.com")
              }
            />
          </motion.div>

          {/* Image & Monogram */}
          <motion.div
            className="lg:w-1/2 flex justify-center w-full relative mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-2 sm:-inset-4 rounded-2xl bg-gradient-to-tr from-[#B08D57]/20 to-transparent blur-xl -z-10" />

            <div className="w-full max-w-[280px] sm:max-w-sm h-[360px] sm:h-[450px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white relative">
              <img
                src="/assets/dp.jfif"
                alt="Tooba Saleem Developer"
                className="w-full h-full object-cover object-top filter brightness-[1.01]"
              />
            </div>

            {/* Monogram Seal Mobile Responsive Position */}
            <motion.div
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#171210] border border-[#B08D57]/40 flex flex-col items-center justify-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_LUXURY }}
              viewport={{ once: true }}
            >
              <span className="font-serif italic text-lg sm:text-2xl text-[#D9C08C]">
                T·S
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-[#B08D57] mt-0.5 font-semibold">
                MERN & WP Dev
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PROCESS SECTION                                                  */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-16 md:py-24 px-4 sm:px-6 lg:px-20 border-t border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Engineering Method
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Development Lifecycle
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {processData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B08D57]/20 relative shadow-sm transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <span className="text-4xl sm:text-5xl font-serif italic text-[#D9C08C]/70 font-light group-hover:text-[#B08D57] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase bg-[#FAF6EF] text-[#B08D57] px-2 py-1 rounded border border-[#B08D57]/20">
                    Phase {item.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1E1712] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7C7266] text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* TECHNICAL VALUES SECTION                                         */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Standards
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Why Work With Me
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {valuesData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FAF6EF] border border-[#B08D57]/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#171210] flex items-center justify-center mb-4 sm:mb-5 shadow-md">
                    <Icon className="text-[#D9C08C] text-base sm:text-lg" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1E1712] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#7C7266] text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* METRICS / NUMBERS SECTION                                        */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[50px] my-6 md:my-10 max-w-[1400px] mx-auto shadow-2xl border border-[#B08D57]/20">
        <div className="absolute top-0 right-0 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-[#B08D57]/15 blur-[80px] md:blur-[140px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-[#D9C08C] uppercase tracking-widest text-[10px] md:text-xs font-bold block mb-2 md:mb-3">
              Developer Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              Track Record & <br />
              <span className="text-[#D9C08C] font-serif italic lowercase font-normal">
                experience
              </span>
            </h2>
          </div>

          <motion.div
            className="lg:w-2/3 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 relative z-10"
            onViewportEnter={() => setNumbersInView(true)}
            viewport={{ once: true, amount: 0.2 }}
          >
            {numbersData.map((item, idx) => {
              const { suffix } = parseNumberValue(item.value);
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start p-4 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black tabular-nums tracking-tight text-white">
                    {counts[idx]}
                    <span className="text-[#D9C08C]">{suffix}</span>
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-300 mt-2 md:mt-3 text-center lg:text-left font-light">
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
      <div className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#B08D57] mb-2 md:mb-3">
              Technical Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Engineering Services
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-[#FAF6EF]/40 p-6 sm:p-8 rounded-2xl border border-[#B08D57]/15 shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <span className="text-[10px] md:text-xs font-mono text-[#B08D57] font-bold bg-[#F1E9DA] px-2.5 py-1 rounded border border-[#B08D57]/20">
                      [{service.number}]
                    </span>
                    <FiCode className="text-neutral-400 group-hover:text-[#B08D57] transition-colors duration-300 text-base sm:text-lg" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1712] mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#7C7266] text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/60">
                  {service.items.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-mono bg-neutral-100 text-[#6B6155] px-2 py-0.5 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PROJECTS SHOWCASE                                                */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-16 md:py-24 px-4 sm:px-6 lg:px-20 border-t border-b border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-3">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#B08D57] block mb-1.5">
                Engineering Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#1E1712]">
                Selected Builds
              </h2>
            </div>
            <p className="text-[#7C7266] font-light max-w-xs text-xs sm:text-sm md:text-right">
              A curated selection of custom full-stack web applications,
              e-commerce stores, and custom WordPress setups.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer border border-[#B08D57]/15"
                onClick={() => project.path !== "#" && navigate(project.path)}
              >
                <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden relative bg-neutral-50 border-b border-neutral-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171210]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <span className="text-white text-[11px] font-medium tracking-widest uppercase flex items-center gap-1.5">
                      Explore Case Study <FiArrowUpRight />
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#B08D57] font-bold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E1712] group-hover:text-[#8A6C3F] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs text-neutral-400 font-light">
                      Interactive Build
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F1E9DA] text-[#B08D57] flex items-center justify-center">
                      <FiArrowUpRight className="text-xs sm:text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FAQ SECTION                                                      */}
      {/* ================================================================ */}
      <div className="w-full bg-[#0F0B09] text-[#FAF6EF] py-16 md:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-10 md:gap-16">
          <div className="lg:w-1/3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#D9C08C] block mb-2 md:mb-3">
              Technical FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Common Queries
            </h2>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col gap-2.5 sm:gap-3">
            {faqsData.map((item, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-white/10 overflow-hidden bg-white/[0.02] rounded-xl px-4 md:px-6 transition-colors duration-300"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-4 md:py-5 focus:outline-none text-left gap-4"
                  >
                    <span
                      className={`font-medium text-sm sm:text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-[#D9C08C]" : "text-white"}`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`text-base sm:text-lg shrink-0 ${isOpen ? "text-[#D9C08C]" : "text-white"}`}
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
                        transition={{ duration: 0.35, ease: EASE_LUXURY }}
                      >
                        <div className="pb-5 text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
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
      {/* FINAL CTA SECTION                                                */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-16 md:py-24 px-4 sm:px-6 lg:px-20">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-[#171210] px-5 sm:px-10 md:px-16 py-14 md:py-20 text-center relative overflow-hidden border border-[#B08D57]/30 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#B08D57]/20 blur-[100px] md:blur-[150px] pointer-events-none" />

          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-[#D9C08C] mb-3 md:mb-5 block relative z-10">
            Start A Project
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Ready to build a{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              custom web solution
            </span>
            ?
          </h2>
          <p className="mt-4 md:mt-6 text-neutral-300 font-light text-xs sm:text-sm md:text-base max-w-md mx-auto relative z-10">
            Have a brief or technical project scope? Send an email and let's
            discuss your web app or WordPress stack.
          </p>

          <motion.a
            href="mailto:toobasaleem190@gmail.com"
            className="mt-8 md:mt-10 inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#B08D57] text-[#171210] font-bold text-xs sm:text-sm uppercase tracking-widest relative z-10 hover:bg-[#D9C08C] transition-colors duration-300 shadow-xl w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiMail /> Get In Touch <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
