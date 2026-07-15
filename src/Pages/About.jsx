import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiArrowLeft,
  FiMail,
} from "react-icons/fi";

/* ==================================================================== */
/* QUIET-LUXURY DESIGN TOKENS — matches Home.jsx / Projects.jsx / Services.jsx */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];
const GOLD = "#B08D57";
const GOLD_LIGHT = "#D9C08C";
const ESPRESSO = "#171210";
const TEXT_MUTED = "#7C7266";

const skillsData = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Elementor",
  "Shopify",
  "Figma to Code",
  "Framer Motion",
  "REST APIs",
  "MERN Stack",
  "Responsive Design",
  "SEO Basics",
];

const timelineData = [
  {
    year: "2023",
    title: "Started Freelancing",
    desc: "Began taking on frontend and WordPress projects for small businesses and individuals — learning what clients actually need, not just what looks good in a portfolio.",
  },
  {
    year: "2024",
    title: "Moved Into React",
    desc: "Shifted focus toward custom React builds and component-driven development, taking on more technically involved projects and e-commerce work.",
  },
  {
    year: "2025",
    title: "Refined the Craft",
    desc: "Narrowed in on a premium, considered aesthetic across every project — treating design and code as equally important parts of the same deliverable.",
  },
  {
    year: "2026",
    title: "Present Day",
    desc: "Working with businesses and individuals who want a site that looks and performs like it was built by a studio, not assembled from a template.",
  },
];

const numbersData = [
  { value: "3+", label: "Years of Freelancing" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HEADER + INTRO                                                   */}
      {/* ================================================================ */}
      <div className="w-full px-6 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[#B08D57]/12 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#7C7266] hover:text-[#B08D57] transition-colors mb-10"
          >
            <FiArrowLeft /> Back Home
          </button>

          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-end justify-between">
            <div className="max-w-2xl">
              <motion.span
                className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                The Designer & Dev
              </motion.span>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1E1712] leading-[1.02]"
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
                className="mt-6 text-[#7C7266] text-base md:text-lg font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                A web developer who cares as much about how a site looks as how
                it's built — clean interfaces, considered layouts, and code that
                stays maintainable long after launch.
              </motion.p>
            </div>

            <motion.div
              className="relative shrink-0"
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
      {/* PHILOSOPHY QUOTE                                                 */}
      {/* ================================================================ */}
      <div className="w-full bg-gradient-to-b from-[#FAF6EF] to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto border-y border-[#B08D57]/20 py-12">
          <p className="font-serif italic text-2xl md:text-3xl text-[#3A2E1F] font-light leading-relaxed">
            "A website should feel like it was made on purpose — every choice,
            from the spacing to the code, made for a reason."
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* MY STORY                                                         */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4 text-center">
            My Story
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712] text-center mb-10">
            How I Got Here
          </h2>
          <div className="flex flex-col gap-6 text-[#3A2E1F] text-base md:text-lg font-light leading-relaxed">
            <p>
              I started out simply curious about how websites worked — pulling
              apart layouts, tweaking colours, trying to understand why some
              sites felt effortless to use and others didn't. That curiosity
              turned into freelancing, and freelancing turned into a focus:
              building sites that are as considered in their design as they are
              solid in their code.
            </p>
            <p>
              Today I work across React, WordPress, and Shopify — but the
              approach stays the same regardless of the tool. Understand what
              the site needs to do, design around that, then build it cleanly
              enough that it's still easy to maintain a year from now.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SKILLS / TOOLS                                                   */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Toolkit
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Skills & Tools
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto">
            {skillsData.map((skill, idx) => (
              <motion.span
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white border border-[#B08D57]/15 text-sm font-medium text-[#3A2E1F] hover:border-[#B08D57]/40 hover:text-[#B08D57] transition-colors duration-300"
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
      {/* TIMELINE                                                         */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              The Journey So Far
            </h2>
          </div>

          <div className="flex flex-col">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 md:gap-10 pb-12 last:pb-0 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#B08D57]" />
                  {idx !== timelineData.length - 1 && (
                    <span className="w-px flex-1 bg-[#B08D57]/20 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="font-serif italic text-xl text-[#B08D57] block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#1E1712] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#7C7266] text-sm md:text-base font-light leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* NUMBERS STRIP                                                    */}
      {/* ================================================================ */}
      <div className="w-full bg-[#171210] text-[#FAF6EF] py-24 px-6 lg:px-20 relative overflow-hidden rounded-[30px] md:rounded-[50px] my-10 max-w-[1400px] mx-auto shadow-xl">
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
              <span className="text-xs uppercase tracking-wider text-neutral-300 mt-3 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================ */}
      {/* CLOSING CTA                                                      */}
      {/* ================================================================ */}
      <div className="w-full px-6 py-24">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[30px] md:rounded-[50px] bg-[#0F0B09] px-8 md:px-16 py-20 text-center relative overflow-hidden"
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
            Curious if I'm{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              the right fit?
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
