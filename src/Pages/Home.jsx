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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_LUXURY },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const hoverCardEffect = {
  rest: { y: 0, scale: 1, boxShadow: "0px 4px 20px rgba(0,0,0,0.02)" },
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: "0px 20px 40px rgba(176, 141, 87, 0.12)",
    transition: { duration: 0.4, ease: EASE_LUXURY },
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
      {/* HERO SECTION WITH FLOATING AMBIENT LIGHTING */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 relative">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[180px] bg-[#B08D57]/15 pointer-events-none"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[160px] bg-[#D9C08C]/20 pointer-events-none"
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-[1250px] w-full text-center flex flex-col items-center justify-center relative z-10">
          <motion.div
            className="flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full border border-[#B08D57]/30 bg-white/80 backdrop-blur-md shadow-[0_4px_25px_rgba(176,141,87,0.1)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B08D57]" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5C5247] font-semibold">
              Full-Stack MERN & WordPress Engineer
            </span>
          </motion.div>

          <motion.h4
            className="text-2xl md:text-3xl font-light tracking-wide text-[#7C7266] mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            Hello, I am{" "}
            <span className="font-serif italic font-normal text-[#8A6C3F]">
              Tooba Saleem
            </span>
          </motion.h4>

          <motion.h1
            className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#1E1712] leading-[1.04] tracking-tight max-w-5xl uppercase"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE_LUXURY }}
          >
            Engineering Custom Web Apps{" "}
            <span className="font-serif italic font-light text-[#B08D57] lowercase">
              & Modern
            </span>{" "}
            CMS Architecture.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-[#6B6155] text-base md:text-lg font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full-Stack Web Developer crafting scalable MERN applications,
            high-performance REST APIs, and bespoke WordPress builds focused on
            clean code and speed.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {techBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(176, 141, 87, 0.15)",
                  borderColor: "rgba(176, 141, 87, 0.5)",
                }}
                className="px-4 py-2 rounded-full text-xs font-mono bg-white/60 text-[#3A2E1F] border border-[#B08D57]/25 shadow-sm backdrop-blur-sm cursor-default transition-colors"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* INFINITE MARQUEE STRIP */}
      <div className="w-full bg-[#171210] text-[#D9C08C] py-4 border-y border-[#B08D57]/30 overflow-hidden relative shadow-inner">
        <motion.div
          className="flex whitespace-nowrap gap-12 text-xs font-mono tracking-[0.25em] uppercase font-bold"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
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

      {/* PHILOSOPHY STATEMENT */}
      <div className="w-full bg-gradient-to-b from-[#FAF6EF] via-white to-white py-20 px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto border-y border-[#B08D57]/20 py-12 relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE_LUXURY }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
            <FiCode className="text-[#B08D57] text-xl" />
          </div>
          <p className="font-serif italic text-2xl md:text-3xl text-[#2C231A] font-light leading-relaxed">
            "High-end web engineering connects responsive frontend experience
            with robust backend database design — code that is fast, secure, and
            built to scale."
          </p>
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full bg-white relative z-20 py-24 shadow-[0_-10px_40px_rgba(176,141,87,0.03)]">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 gap-16">
          <motion.div
            className="flex flex-col gap-6 lg:w-1/2 w-full text-center lg:text-left items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_LUXURY }}
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-[#F1E9DA] rounded-md">
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#B08D57]">
                Full-Stack & CMS Developer
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1E1712]">
              Scalable Systems <br />& Modern Code.
            </h2>

            <p className="text-[#7C7266] text-base md:text-lg leading-relaxed font-light">
              I specialize in developing end-to-end web applications utilizing
              the MERN stack (MongoDB, Express, React, Node.js) along with
              custom WordPress theme solutions. My goal is to build
              well-structured, maintainable code bases that give businesses
              complete control, high reliability, and fast load speeds.
            </p>

            <Button
              text="Let's Build Together"
              className="mt-4 shadow-xl shadow-[#B08D57]/15 bg-[#B08D57] text-white hover:bg-[#8A6C3F] transition-all duration-300"
              onClick={() =>
                (window.location.href = "mailto:toobasaleem190@gmail.com")
              }
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_LUXURY }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#B08D57]/20 to-transparent blur-xl -z-10" />
            <motion.div
              className="w-full max-w-sm h-[470px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/dp.jfif"
                alt="Tooba Saleem Developer"
                className="w-full h-full object-cover object-top filter brightness-[1.01]"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#171210] border border-[#B08D57]/40 flex flex-col items-center justify-center shadow-2xl"
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE_LUXURY }}
              viewport={{ once: true }}
              whileHover={{ rotate: 10, scale: 1.05 }}
            >
              <span className="font-serif italic text-2xl text-[#D9C08C]">
                T·S
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-[#B08D57] mt-1 font-semibold">
                MERN & WP Dev
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Engineering Method
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Development Lifecycle
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {processData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                custom={hoverCardEffect}
                className="bg-white p-8 rounded-2xl border border-[#B08D57]/20 relative shadow-sm transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl font-serif italic text-[#D9C08C]/70 font-light group-hover:text-[#B08D57] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[#FAF6EF] text-[#B08D57] px-2 py-1 rounded border border-[#B08D57]/20">
                    Phase {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E1712] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7C7266] text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* TECHNICAL VALUES SECTION */}
      <div className="w-full bg-white py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Why Work With Me
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {valuesData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{
                    y: -6,
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(176, 141, 87, 0.4)",
                    boxShadow: "0 15px 30px rgba(176,141,87,0.1)",
                  }}
                  className="p-7 rounded-2xl bg-[#FAF6EF] border border-[#B08D57]/15 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-[#171210] flex items-center justify-center mb-5 shadow-md">
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
          </motion.div>
        </div>
      </div>

      {/* METRICS / NUMBERS SECTION */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-24 px-6 lg:px-20 relative overflow-hidden rounded-[30px] md:rounded-[50px] my-10 max-w-[1400px] mx-auto shadow-2xl border border-[#B08D57]/20">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#B08D57]/15 blur-[140px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-[#D9C08C] uppercase tracking-widest text-xs font-bold block mb-3">
              Developer Metrics
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              Track Record & <br />
              <span className="text-[#D9C08C] font-serif italic lowercase font-normal">
                experience
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
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.04,
                    borderColor: "rgba(176, 141, 87, 0.5)",
                  }}
                  className="flex flex-col items-center lg:items-start p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300"
                >
                  <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tight text-white">
                    {counts[idx]}
                    <span className="text-[#D9C08C]">{suffix}</span>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-300 mt-3 text-center lg:text-left font-light">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-3">
              Technical Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Engineering Services
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(176, 141, 87, 0.12)",
                  borderColor: "rgba(176, 141, 87, 0.4)",
                }}
                className="group bg-[#FAF6EF]/40 p-8 rounded-2xl border border-[#B08D57]/15 shadow-sm transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-[#B08D57] font-bold bg-[#F1E9DA] px-2.5 py-1 rounded border border-[#B08D57]/20">
                      [{service.number}]
                    </span>
                    <FiCode className="text-neutral-400 group-hover:text-[#B08D57] transition-colors duration-300 text-lg" />
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
                      className="text-[11px] font-mono bg-neutral-100 text-[#6B6155] px-2.5 py-0.5 rounded-full font-medium"
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

      {/* PROJECTS SHOWCASE */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-b border-[#B08D57]/15">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-2">
                Engineering Showcase
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#1E1712]">
                Selected Builds
              </h2>
            </div>
            <p className="text-[#7C7266] font-light max-w-xs text-sm md:text-right">
              A curated selection of custom full-stack web applications,
              e-commerce stores, and custom WordPress setups.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#B08D57]/15"
                onClick={() => project.path !== "#" && navigate(project.path)}
              >
                <div className="w-full h-[300px] overflow-hidden relative bg-neutral-50 border-b border-neutral-100">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: EASE_LUXURY }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171210]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                    <span className="text-white text-xs font-medium tracking-widest uppercase flex items-center gap-1.5">
                      Explore Case Study <FiArrowUpRight />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08D57] font-bold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1E1712] group-hover:text-[#8A6C3F] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-light">
                      Interactive Build
                    </span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#F1E9DA] text-[#B08D57] flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "#B08D57",
                        color: "#ffffff",
                      }}
                    >
                      <FiArrowUpRight className="text-sm" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full bg-[#0F0B09] text-[#FAF6EF] py-24 px-6 lg:px-20">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] block mb-3">
              Technical FAQ
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
                  className="border-b border-white/10 overflow-hidden bg-white/[0.02] rounded-xl px-4 md:px-6 transition-colors duration-300 hover:bg-white/[0.04]"
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
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-lg ${isOpen ? "text-[#D9C08C]" : "text-white"}`}
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_LUXURY }}
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

      {/* FINAL CTA SECTION */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[30px] md:rounded-[50px] bg-[#171210] px-8 md:px-16 py-20 text-center relative overflow-hidden border border-[#B08D57]/30 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_LUXURY }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B08D57]/20 blur-[150px] pointer-events-none"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] mb-5 block relative z-10">
            Start A Project
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Ready to build a{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              custom web solution
            </span>
            ?
          </h2>
          <p className="mt-6 text-neutral-300 font-light max-w-md mx-auto relative z-10">
            Have a brief or technical project scope? Send an email and let's
            discuss your web app or WordPress stack.
          </p>

          <motion.a
            href="mailto:toobasaleem190@gmail.com"
            className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B08D57] text-[#171210] font-bold text-sm uppercase tracking-widest relative z-10 hover:bg-[#D9C08C] transition-colors duration-300 shadow-xl"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 10px 25px rgba(176,141,87,0.4)",
            }}
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
