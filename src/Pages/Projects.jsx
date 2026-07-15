import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";

/* ==================================================================== */
/* QUIET-LUXURY DESIGN TOKENS — matches Home.jsx                        */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];
const GOLD = "#B08D57";
const GOLD_LIGHT = "#D9C08C";
const ESPRESSO = "#171210";
const TEXT_MUTED = "#7C7266";

const projectsData = [
  {
    img: "/assets/img1.png",
    title: "Thedesignspark",
    category: "Web Development",
    year: "2025",
    description:
      "A fast, content-first React build for a design studio — structured around clarity, generous whitespace, and effortless navigation.",
    path: "/thedesignspark",
    featured: true,
  },
  {
    img: "/assets/img2.png",
    title: "Etec Website",
    category: "Custom Frontend",
    year: "2024",
    description:
      "A bespoke frontend rebuilt from the ground up with custom components and a considered type system.",
    path: "/Etec",
  },
  {
    img: "/assets/img3.png",
    title: "store.shoppsm",
    category: "E-Commerce",
    year: "2024",
    description:
      "A conversion-focused storefront with a streamlined checkout and a product grid that keeps browsing effortless.",
    path: "/shoppsmstore",
  },
  {
    img: "/assets/img4.png",
    title: "The College Cafe",
    category: "Brand Website",
    year: "2024",
    description:
      "A warm, editorial brand site that translates an in-person cafe experience into a considered digital one.",
    path: "/College",
  },
  {
    img: "/assets/img5.png",
    title: "Upcoming Premium Project 01",
    category: "UI & Design",
    year: "2026",
    description:
      "In development — a premium interface exploration currently in the design phase.",
    path: "#",
  },
  {
    img: "/assets/img6.png",
    title: "Upcoming Premium Project 02",
    category: "WordPress Custom",
    year: "2026",
    description:
      "In development — a fully custom WordPress build focused on speed and editorial flexibility.",
    path: "#",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projectsData.map((p) => p.category))),
];

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = projectsData.find((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  const filteredRest = useMemo(() => {
    if (activeFilter === "All") return rest;
    return rest.filter((p) => p.category === activeFilter);
  }, [activeFilter, rest]);

  const showFeatured =
    activeFilter === "All" || activeFilter === featured?.category;

  return (
    <div className="w-full bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
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

          <motion.span
            className="text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] block mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Showcase Studio
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.02] max-w-4xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            Selected{" "}
            <span className="font-serif italic lowercase font-light text-[#B08D57]">
              works
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[#7C7266] text-base md:text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A curated collection of storefronts, brand sites, and React
            architectures — each one built around a clear strategy before a
            single pixel was placed.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-3 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold border transition-all duration-300 ${
                    isActive
                      ? "bg-[#171210] text-[#D9C08C] border-[#171210]"
                      : "bg-white text-[#7C7266] border-[#B08D57]/15 hover:border-[#B08D57]/40 hover:text-[#B08D57]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FEATURED SPOTLIGHT                                               */}
      {/* ================================================================ */}
      <AnimatePresence>
        {showFeatured && featured && (
          <motion.div
            className="w-full px-6 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-[1300px] mx-auto">
              <motion.div
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[28px] overflow-hidden border border-[#B08D57]/12 shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                onClick={() => featured.path !== "#" && navigate(featured.path)}
              >
                <div className="relative h-[320px] lg:h-auto overflow-hidden bg-neutral-50 order-1 lg:order-none">
                  <motion.img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#171210]/85 backdrop-blur-sm text-[#D9C08C] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Featured Case
                  </span>
                </div>

                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-bold mb-4">
                    {featured.category} · {featured.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E1712] mb-4 group-hover:text-[#8A6C3F] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[#7C7266] text-sm md:text-base font-light leading-relaxed mb-8 max-w-md">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1E1712] group-hover:text-[#B08D57] transition-colors w-fit">
                    Explore Case{" "}
                    <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* PROJECTS GRID                                                    */}
      {/* ================================================================ */}
      <div className="w-full px-6 py-16">
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredRest.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer border border-[#B08D57]/10"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: idx * 0.04, ease: EASE }}
                  onClick={() => project.path !== "#" && navigate(project.path)}
                >
                  <div className="w-full h-[260px] overflow-hidden relative bg-neutral-50 border-b border-neutral-100">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171210]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <span className="text-white text-xs font-medium tracking-widest uppercase flex items-center gap-1">
                        Explore Case <FiArrowUpRight />
                      </span>
                    </div>
                    <span className="absolute top-4 right-4 font-serif italic text-white/80 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#B08D57] font-bold block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#1E1712] group-hover:text-[#8A6C3F] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#7C7266] text-sm font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
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
            </AnimatePresence>
          </motion.div>

          {filteredRest.length === 0 && !showFeatured && (
            <div className="text-center py-24 text-[#7C7266] font-light">
              No case studies in this category yet — check back soon.
            </div>
          )}
        </div>
      </div>

      {/* ================================================================ */}
      {/* CLOSING CTA                                                      */}
      {/* ================================================================ */}
      <div className="w-full px-6 pb-24 pt-8">
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
            Have a brief that deserves{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              this level
            </span>{" "}
            of craft?
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

export default Projects;
