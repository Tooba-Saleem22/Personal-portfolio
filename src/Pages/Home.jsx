import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
import Button from "../components/Button";
import IdeaSection from "../components/IdeaSection";

/* ==================================================================== */
/* DESIGN TOKENS                                                      */
/* rose      #B76E79   signature accent — ties into Rankify brand hue  */
/* roseDeep  #8C4A56   accent hover / emphasis                        */
/* One easing curve used everywhere so motion feels like one voice.    */
/* ==================================================================== */

const EASE = [0.16, 1, 0.3, 1];
const ROSE = "#B76E79";
const ROSE_DEEP = "#8C4A56";

/* Data used inside the component below */
const numbersData = [
  { value: "2+", label: "Years of Freelancing" },
  { value: "10+", label: "Projects Completed" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
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

/* naye project isi array mn add krna — pattern neeche comment mn hai */
const projectsData = [
  { img: "/assets/img1.png", title: "Thedesignspark", path: "/thedesignspark" },
  { img: "/assets/img2.png", title: "etec", path: "/Etec" },
  { img: "/assets/img3.png", title: "store.shoppsm", path: "/shoppsmstore" },
  { img: "/assets/img4.png", title: "The College Cafe", path: "/College" },
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

/* ==================================================================== */
/* HOME — one single component, everything written inline              */
/* ==================================================================== */

const Home = () => {
  const navigate = useNavigate();

  // FAQ accordion
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Numbers count-up — all four animate together once the section is seen
  const [numbersInView, setNumbersInView] = useState(false);
  const [counts, setCounts] = useState(numbersData.map(() => 0));

  useEffect(() => {
    if (!numbersInView) return;
    const duration = 1200;
    const startTime = performance.now();
    let raf;

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCounts(
        numbersData.map((item) => {
          const { num } = parseNumberValue(item.value);
          return Math.floor(progress * num);
        }),
      );
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [numbersInView]);

  return (
    <div className="w-full bg-white">
      {/* ================================================================ */}
      {/* HERO                                                              */}
      {/* ================================================================ */}
      <div className="w-full flex items-center justify-center px-6 pt-32 md:pt-40 pb-20 relative overflow-hidden">
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
            Web developer building clean, fast, and functional websites for
            small businesses and brands.
          </motion.p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* ABOUT                                                            */}
      {/* ================================================================ */}
      <div className="w-full overflow-visible relative z-20 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 sm:py-20 md:py-28 gap-10">
          <motion.div
            className="flex flex-col gap-5 sm:gap-6 md:w-1/2 w-full max-w-full md:max-w-xl break-words
                       text-center md:text-left items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: ROSE }}
              />
              <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-neutral-500">
                About Me
              </span>
            </div>

            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
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
            </p>

            <Button
              text="Contact Now"
              className="w-32 h-10 px-3 py-1.5 text-sm"
              onClick={() =>
                (window.location.href =
                  "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,")
              }
            />
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

      {/* ================================================================ */}
      {/* NUMBERS                                                        */}
      {/* ================================================================ */}
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

        <motion.div
          className="flex-1 grid grid-cols-2 gap-6 mt-5 relative"
          onViewportEnter={() => setNumbersInView(true)}
          viewport={{ once: true, amount: 0.6 }}
        >
          {numbersData.map((item, idx) => {
            const { suffix } = parseNumberValue(item.value);
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center py-7 border-neutral-200 ${
                  idx % 2 === 0 ? "border-r" : ""
                }`}
              >
                <span className="text-4xl md:text-6xl font-bold text-black tabular-nums">
                  {counts[idx]}
                  <span style={{ color: ROSE_DEEP }}>{suffix}</span>
                </span>
                <span className="text-sm text-neutral-500 mt-2">
                  {item.label}
                </span>
              </div>
            );
          })}
          <div className="absolute left-2 right-2 top-[50%] border-t border-neutral-200 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* SERVICES                                                       */}
      {/* ================================================================ */}
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
            {servicesData.map((service, idx) => (
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

      {/* ================================================================ */}
      {/* PROJECTS                                                       */}
      {/* ================================================================ */}
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
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col items-center cursor-pointer"
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
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-400">
                  <span
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400"
                    style={{ backgroundColor: ROSE }}
                  >
                    <FiArrowUpRight />
                  </span>
                </div>
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

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}
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

        <div className="flex md:mr-14 md:-mt-32 justify-start md:justify-end w-full">
          <div className="w-full md:w-3/4 flex flex-col gap-0 md:gap-2">
            {faqsData.map((item, idx) => {
              const isOpen = activeFAQ === idx;
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
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-2 md:px-6 py-5 bg-transparent focus:outline-none text-left"
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
    </div>
  );
};

export default Home;
