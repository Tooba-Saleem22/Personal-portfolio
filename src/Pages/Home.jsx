import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
import Button from "../components/Button";
import IdeaSection from "../components/IdeaSection";

/* ------------------------------------------------------------------ */
/*  Shared motion system — one consistent feel across every section.  */
/*  Signature: soft "expo-out" easing + a dusty-rose accent that      */
/*  marks the same job everywhere (underline, dot, number outline).   */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1];
const ROSE = "#B76E79";
const ROSE_DEEP = "#8C4A56";
const INK = "#0A0A0A";
const PAPER = "#FAF8F5";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = (delay = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

/* A small recurring mark used at the top of every section heading —
   the thread that ties the page together. */
const Eyebrow = ({ children }) => (
  <motion.div
    variants={fadeUp}
    className="flex items-center gap-2 mb-4 justify-center md:justify-start"
  >
    <span
      className="h-[6px] w-[6px] rounded-full"
      style={{ backgroundColor: ROSE }}
    />
    <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-neutral-500">
      {children}
    </span>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden">
      {/* ambient signature shape, quiet and out of the way */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[6%] w-[420px] h-[420px] rounded-full blur-[90px]"
        style={{
          background: `radial-gradient(circle, ${ROSE}22, transparent 70%)`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      />

      <div className="max-w-[1400px] w-full text-center flex flex-col items-center justify-center relative">
        <motion.div
          className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neutral-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ backgroundColor: ROSE }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: ROSE }}
            />
          </span>
          <span className="text-xs md:text-sm text-neutral-600 tracking-wide">
            Available for new projects
          </span>
        </motion.div>

        <motion.h4
          className="text-2xl md:text-4xl text-black mb-4 font-normal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Hello, I'm{" "}
          <span className="italic font-serif" style={{ color: ROSE_DEEP }}>
            Tooba
          </span>
        </motion.h4>

        <motion.h1
          className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-8xl font-bold text-black leading-[0.95] max-w-6xl uppercase tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          Bringing ideas to life with code and design.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-neutral-500 text-base md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
        >
          Web developer building clean, fast, and functional websites for small
          businesses and brands.
        </motion.p>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  ABOUT                                                               */
/* ------------------------------------------------------------------ */

const About = () => {
  return (
    <div className="w-full overflow-visible relative z-20 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 sm:py-20 md:py-28 gap-10">
        <motion.div
          className="flex flex-col gap-5 sm:gap-6 md:w-1/2 w-full max-w-full md:max-w-xl break-words
                     text-center md:text-left items-center md:items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger()}
        >
          <Eyebrow>About Me</Eyebrow>

          <motion.p
            variants={fadeUp}
            className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
          >
            <span
              className="text-2xl md:text-3xl font-serif italic mr-1"
              style={{ color: ROSE_DEEP }}
            >
              Hi!
            </span>{" "}
            I'm Tooba, a dedicated web developer with a passion for crafting
            beautiful and functional websites. I enjoy transforming ideas into
            seamless digital experiences and continuously exploring new
            technologies to enhance my skills. My goal is to create clean,
            user-friendly designs that leave a lasting impression.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              text="Contact Now"
              className="w-32 h-10 px-3 py-1.5 text-sm"
              onClick={() =>
                (window.location.href =
                  "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,")
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center w-full mt-4 md:mt-0 relative"
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true }}
        >
          <div
            className="absolute -inset-3 rounded-xl -z-10 hidden md:block"
            style={{ border: `1px solid ${ROSE}55` }}
          />
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-lg shadow-xl pointer-events-none select-none">
            <img
              src="/assets/Gemini_Generated_Image_nj0qienj0qienj0q.png"
              alt="About Me"
              draggable="false"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  NUMBERS — count-up on view, quiet and precise                      */
/* ------------------------------------------------------------------ */

const parseNumberValue = (value) => {
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { num, suffix };
};

const CountUpStat = ({ value, label, delay }) => {
  const { num, suffix } = parseNumberValue(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start;
    const duration = 1200;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setDisplay(Math.floor(progress * num));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, num]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center py-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      viewport={{ once: true }}
    >
      <span className="text-4xl md:text-6xl font-bold text-black tabular-nums">
        {display}
        <span style={{ color: ROSE_DEEP }}>{suffix}</span>
      </span>
      <span className="text-sm text-neutral-500 mt-2">{label}</span>
    </motion.div>
  );
};

const numbers = [
  { value: "2+", label: "Years of Freelancing" },
  { value: "10+", label: "Projects Completed" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const NumbersSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row gap-10 rounded-t-lg md:rounded-t-[180px] overflow-hidden">
      <motion.h2
        className="text-4xl md:text-6xl md:leading-[0.9] font-bold uppercase flex-1 text-black text-center md:text-left md:self-start"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        viewport={{ once: true }}
      >
        Some <br /> Numbers
      </motion.h2>

      <div className="flex-1 grid grid-cols-2 gap-6 mt-5 relative">
        {numbers.map((item, idx) => (
          <div
            key={idx}
            className={`border-neutral-200 ${idx % 2 === 0 ? "border-r" : ""}`}
          >
            <CountUpStat
              value={item.value}
              label={item.label}
              delay={idx * 0.15}
            />
          </div>
        ))}
        <div className="absolute left-2 right-2 top-[50%] border-t border-neutral-200 -translate-y-1/2" />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  SERVICES — restrained hover, rose accent bar does the talking      */
/* ------------------------------------------------------------------ */

const services = [
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

const Services = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-10">
        <motion.div
          className="w-full md:w-1/4 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl md:mt-14 font-bold uppercase text-center md:text-left">
            Services
          </h2>
        </motion.div>

        <div className="w-full md:w-3/4 flex flex-col md:mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative flex flex-col md:flex-row gap-4 md:gap-10 items-start py-6 border-b border-white/10 last:border-b-0 pl-0 md:pl-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span
                className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"
                style={{ backgroundColor: ROSE }}
              />

              <div className="w-full md:w-[180px] md:ml-24 flex-shrink-0 text-center md:text-left">
                <p
                  className="text-sm font-semibold mb-0"
                  style={{ color: ROSE }}
                >
                  [{service.number}]
                </p>
                <h3 className="text-lg md:text-xl font-bold whitespace-nowrap text-white">
                  {service.title}
                </h3>
              </div>

              <div className="flex-1 text-center md:ml-16 md:text-left">
                <div className="text-sm md:text-base font-semibold mb-1 md:mb-3 text-neutral-400">
                  {service.items.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i !== service.items.length - 1 && " · "}
                    </span>
                  ))}
                </div>
                <p className="text-white/80 text-sm md:text-base max-w-full leading-snug">
                  {service.description}
                </p>
              </div>

              <FiArrowUpRight
                className="hidden md:block absolute right-0 top-8 text-2xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400"
                style={{ color: ROSE }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  PROJECTS — magnetic-feeling hover, image reveal on scroll          */
/* ------------------------------------------------------------------ */

const projects = [
  { img: "/assets/img1.png", title: "Thedesignspark", path: "/thedesignspark" },
  { img: "/assets/img2.png", title: "etec", path: "/Etec" },
  { img: "/assets/img3.png", title: "store.shoppsm", path: "/shoppsmstore" },
  { img: "/assets/img4.png", title: "The College Cafe", path: "/College" },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-black py-10 px-4 md:py-20 md:px-20">
      <motion.div
        className="flex items-end justify-between mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-center md:text-left">
          Projects
        </h2>
        <span className="hidden md:block text-sm text-neutral-500 tracking-wide">
          Selected Work
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center cursor-pointer"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.12, ease: EASE }}
            viewport={{ once: true }}
            onClick={() => project.path && navigate(project.path)}
          >
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg relative bg-neutral-100">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top rounded-xl"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.6, ease: EASE }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl"
                  style={{ backgroundColor: ROSE }}
                >
                  <FiArrowUpRight />
                </span>
              </motion.div>
            </div>

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

/* ------------------------------------------------------------------ */
/*  WORK EXPERIENCE — a real timeline, so the line + dots earn a place */
/* ------------------------------------------------------------------ */

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
      className={`${bgColor} py-16 px-6 md:py-24 md:px-20 flex flex-col md:flex-row gap-10`}
    >
      <motion.h2
        className={`text-3xl md:text-6xl font-bold uppercase text-center md:text-left flex-1 whitespace-nowrap ${textColor}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        viewport={{ once: true }}
      >
        Work <br /> Experience
      </motion.h2>

      <div className={`flex-1 max-w-[800px] ${textColor} relative`}>
        <div
          className="absolute left-[5px] top-2 bottom-2 w-px hidden md:block"
          style={{
            background: `linear-gradient(${textColor.includes("white") ? "#ffffff33" : "#00000022"}, transparent)`,
          }}
        />
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="w-full flex flex-col gap-2 relative md:pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: EASE }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <span
                className="hidden md:block absolute left-0 top-1.5 w-[10px] h-[10px] rounded-full"
                style={{
                  backgroundColor: ROSE,
                  boxShadow: `0 0 0 4px ${ROSE}22`,
                }}
              />

              <div className="flex justify-between w-full items-start">
                <p className="text-base md:text-xl lg:text-2xl font-semibold">
                  {exp.title}
                </p>
                <div className="flex flex-col items-end">
                  <p className="text-sm md:text-lg font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs md:text-sm text-neutral-500">
                    {exp.period}
                  </p>
                </div>
              </div>

              {idx !== experiences.length - 1 && (
                <hr
                  className={`w-full border-t ${textColor.replace("text", "border")}/10 mt-4`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  FAQ — spring-driven accordion, one open panel                      */
/* ------------------------------------------------------------------ */

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
  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      <div className="w-full bg-black text-white py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
        <motion.h2
          className="text-4xl md:text-6xl md:mt-16 font-bold uppercase text-white text-center md:text-left mb-8 md:mb-16 flex-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          FAQs
        </motion.h2>

        <div className="flex-5 flex md:mr-14 md:-mt-32 justify-start md:justify-end">
          <div className="w-full md:w-3/4 flex flex-col gap-0 md:gap-2">
            {faqs.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  className="border-b border-white/10 overflow-hidden last:border-b-0"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex justify-between items-center px-2 md:px-6 py-5 bg-transparent focus:outline-none text-left group"
                  >
                    <span
                      className="font-semibold text-lg md:text-xl text-left transition-colors"
                      style={{ color: isOpen ? ROSE : "#ffffff" }}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="ml-2 text-xl"
                      style={{ color: isOpen ? ROSE : "#ffffff" }}
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
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <div className="px-2 md:px-6 pb-5 text-white/70 text-base md:text-lg">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <IdeaSection />
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  HOME — everything combined into a single, cohesive page            */
/* ------------------------------------------------------------------ */

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Hero />
      <About />
      <NumbersSection />
      <Services />
      <Projects />
      <WorkExperience />
      <FAQSection />
    </div>
  );
};

export default Home;
