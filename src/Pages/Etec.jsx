import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";

/* ==================================================================== */
/* QUIET-LUXURY DESIGN TOKENS — matches Home.jsx / Projects.jsx         */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];
const GOLD = "#B08D57";
const GOLD_LIGHT = "#D9C08C";
const ESPRESSO = "#171210";
const TEXT_MUTED = "#7C7266";

const projectMeta = {
  title: "Etec",
  category: "E-Commerce · React",
  year: "2024",
  role: "Frontend Development & UI",
  timeline: "4 Weeks",
  tools: ["React", "Tailwind CSS", "Framer Motion", "Context API", "Stripe"],
  liveUrl: "#",
};

const galleryImages = [
  "/assets/img2.png",
  "/assets/img2.png",
  "/assets/img2.png",
];

const featuresData = [
  {
    title: "Dynamic Product Catalog",
    desc: "Category and filter-driven product grid built with reusable components, so new stock renders without any layout rework.",
  },
  {
    title: "Persistent Cart & Checkout",
    desc: "A cart that survives page refreshes, built with global state management, leading into a streamlined multi-step checkout.",
  },
  {
    title: "Built for Conversion",
    desc: "Every screen — product page, cart, checkout — designed to remove friction between browsing and buying.",
  },
];

const nextProject = {
  title: "store.shoppsm",
  path: "/shoppsmstore",
};

const Etec = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
      {/* ================================================================ */}
      <div className="w-full px-6 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[#B08D57]/12 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#7C7266] hover:text-[#B08D57] transition-colors mb-10"
          >
            <FiArrowLeft /> Back to Works
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <motion.span
                className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                {projectMeta.category} · {projectMeta.year}
              </motion.span>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.02]"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: EASE }}
              >
                Etec{" "}
                <span className="font-serif italic lowercase font-light text-[#B08D57]">
                  store
                </span>
              </motion.h1>
            </div>

            {projectMeta.liveUrl !== "#" && (
              <motion.a
                href={projectMeta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#171210] text-[#D9C08C] font-bold text-xs uppercase tracking-widest hover:bg-[#B08D57] hover:text-[#171210] transition-colors duration-300 w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Visit Live Site <FiExternalLink />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* HERO IMAGE                                                       */}
      {/* ================================================================ */}
      <div className="w-full px-6 pb-20">
        <motion.div
          className="max-w-[1300px] mx-auto rounded-[28px] overflow-hidden border border-[#B08D57]/12 shadow-xl h-[380px] md:h-[560px] bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        >
          <img
            src="/assets/img2.png"
            alt={projectMeta.title}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* OVERVIEW + META                                                  */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4">
              Overview
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E1712] mb-6 leading-snug">
              A conversion-focused e-commerce store, built entirely in React.
            </h2>
            <p className="text-[#3A2E1F] text-base md:text-lg font-light leading-relaxed mb-6">
              Etec needed a storefront that could handle a growing product
              catalog without turning into a maintenance headache. Rather than a
              page-builder theme, the site was built as a custom React
              application — component-driven, fast, and structured so new
              products and categories plug straight into the existing layout.
            </p>
            <p className="text-[#3A2E1F] text-base md:text-lg font-light leading-relaxed">
              The focus throughout was reducing friction: a cart that persists
              across sessions, a checkout that doesn't ask for more than it
              needs, and product pages that load instantly on any device.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 bg-[#FAF6EF] rounded-2xl border border-[#B08D57]/12 p-8 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B08D57] block mb-1.5">
                Role
              </span>
              <span className="text-[#1E1712] font-medium">
                {projectMeta.role}
              </span>
            </div>
            <div className="h-px bg-[#B08D57]/15" />
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B08D57] block mb-1.5">
                Timeline
              </span>
              <span className="text-[#1E1712] font-medium">
                {projectMeta.timeline}
              </span>
            </div>
            <div className="h-px bg-[#B08D57]/15" />
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B08D57] block mb-2">
                Tools Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {projectMeta.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white text-[#7C7266] px-2.5 py-1 rounded-full font-medium border border-[#B08D57]/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* KEY FEATURES                                                     */}
      {/* ================================================================ */}
      <div className="w-full bg-[#FAF6EF] py-24 px-6 lg:px-20 border-t border-[#B08D57]/10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              The Details
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#B08D57]/12 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true }}
              >
                <span className="font-serif italic text-3xl text-[#D9C08C] font-light block mb-4">
                  0{idx + 1}
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
      {/* GALLERY                                                          */}
      {/* ================================================================ */}
      <div className="w-full bg-white py-24 px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] mb-2 block">
              Visuals
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              A Closer Look
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="h-[280px] rounded-2xl overflow-hidden border border-[#B08D57]/10 bg-[#FAF6EF]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={`${projectMeta.title} detail ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* NEXT PROJECT                                                     */}
      {/* ================================================================ */}
      <div className="w-full px-6 pb-10">
        <motion.button
          onClick={() => navigate(nextProject.path)}
          className="w-full max-w-[1300px] mx-auto flex items-center justify-between gap-6 bg-[#171210] rounded-[28px] px-8 md:px-14 py-12 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D9C08C] block mb-2">
              Next Case Study
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#D9C08C] transition-colors">
              {nextProject.title}
            </h3>
          </div>
          <span className="shrink-0 w-14 h-14 rounded-full border border-[#B08D57]/40 flex items-center justify-center text-[#D9C08C] group-hover:bg-[#B08D57] group-hover:text-[#171210] transition-colors duration-300">
            <FiArrowUpRight className="text-xl" />
          </span>
        </motion.button>
      </div>

      {/* ================================================================ */}
      {/* CLOSING CTA                                                      */}
      {/* ================================================================ */}
      <div className="w-full px-6 pb-24 pt-8">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[30px] md:rounded-[50px] bg-[#0F0B09] px-8 md:px-16 py-20 text-center relative overflow-hidden"
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
            Need a store built{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              like this?
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

export default Etec;
