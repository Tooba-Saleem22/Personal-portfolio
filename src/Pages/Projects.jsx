import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiMail,
  FiArrowLeft,
  FiStar,
} from "react-icons/fi";

/* ==================================================================== */
/* DESIGN CONSTANTS & ANIMATIONS                                       */
/* ==================================================================== */
const EASE = [0.16, 1, 0.3, 1];

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

/* Framer Motion Stagger Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

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
    <div className="w-full min-h-screen bg-[#FAF6EF] text-[#1E1712] selection:bg-[#B08D57]/20 font-sans antialiased overflow-x-hidden">
      {/* ================================================================ */}
      {/* HERO / HEADER SECTION                                            */}
      {/* ================================================================ */}
      <section className="w-full px-5 sm:px-8 pt-24 md:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[150px] bg-[#B08D57]/15 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full blur-[90px] bg-[#B08D57]/10 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#7C7266] hover:text-[#B08D57] transition-colors mb-8 sm:mb-12 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
            Back Home
          </motion.button>

          <motion.span
            className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#B08D57] flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <FiStar className="text-xs animate-pulse" /> Showcase Studio
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.05] sm:leading-[1.02] max-w-4xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            Selected{" "}
            <span className="font-serif italic lowercase font-light text-[#B08D57] border-b-2 border-[#B08D57]/20 pb-1">
              works
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[#7C7266] text-sm sm:text-base md:text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A curated collection of storefronts, brand sites, and React
            architectures — each one built around a clear strategy before a
            single pixel was placed.
          </motion.p>

          {/* Mobile Swipeable Categories */}
          <motion.div
            className="flex items-center gap-2.5 sm:gap-3 mt-10 sm:mt-12 overflow-x-auto pb-4 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? "bg-[#171210] text-[#D9C08C] border-[#171210] shadow-md scale-[1.02]"
                      : "bg-white/80 backdrop-blur-sm text-[#7C7266] border-[#B08D57]/15 hover:border-[#B08D57]/40 hover:text-[#B08D57]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURED SPOTLIGHT SECTION                                       */}
      {/* ================================================================ */}
      <AnimatePresence mode="wait">
        {showFeatured && featured && (
          <motion.section
            className="w-full px-5 sm:px-8 pb-8 sm:pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="max-w-[1300px] mx-auto">
              <motion.div
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#B08D57]/15 shadow-sm hover:shadow-2xl hover:border-[#B08D57]/30 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                onClick={() => featured.path !== "#" && navigate(featured.path)}
              >
                {/* Image Showcase */}
                <div className="relative h-[260px] sm:h-[360px] lg:h-auto overflow-hidden bg-neutral-100">
                  <motion.img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: EASE }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-[#171210]/90 backdrop-blur-md text-[#D9C08C] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold border border-[#D9C08C]/20 shadow-lg">
                    ★ Featured Case
                  </span>
                </div>

                {/* Information */}
                <div className="p-7 sm:p-10 md:p-14 flex flex-col justify-center bg-gradient-to-b from-white to-[#FAF6EF]/30">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-bold mb-3 sm:mb-4 block">
                    {featured.category} · {featured.year}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E1712] mb-3 sm:mb-4 group-hover:text-[#B08D57] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-[#7C7266] text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8 max-w-md">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E1712] group-hover:text-[#B08D57] transition-colors w-fit">
                    Explore Case Study{" "}
                    <FiArrowUpRight className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* PROJECTS GRID SECTION                                           */}
      {/* ================================================================ */}
      <section className="w-full px-5 sm:px-8 py-8 sm:py-16">
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredRest.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  variants={itemVariants}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#B08D57]/15 hover:border-[#B08D57]/30"
                  whileHover={{ y: -6 }}
                  onClick={() => project.path !== "#" && navigate(project.path)}
                >
                  {/* Card Image */}
                  <div className="w-full h-[220px] sm:h-[260px] overflow-hidden relative bg-neutral-50 border-b border-neutral-100">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171210]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs font-medium tracking-widest uppercase flex items-center gap-1.5">
                        Explore Case <FiArrowUpRight />
                      </span>
                    </div>
                    <span className="absolute top-4 right-4 font-serif italic text-white/90 bg-[#171210]/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#B08D57] font-bold block mb-1.5">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1E1712] group-hover:text-[#B08D57] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#7C7266] text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-400 font-light tracking-wide">
                        {project.path === "#"
                          ? "In Development"
                          : "Interactive Case"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF6EF] group-hover:bg-[#B08D57] text-[#B08D57] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                        <FiArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredRest.length === 0 && !showFeatured && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 sm:py-28 text-[#7C7266] font-light bg-white/40 rounded-3xl border border-dashed border-[#B08D57]/20"
            >
              No case studies found in this category right now.
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================ */}
      {/* CALL TO ACTION SECTION                                           */}
      {/* ================================================================ */}
      <section className="w-full px-5 sm:px-8 pb-16 sm:pb-24 pt-8">
        <motion.div
          className="max-w-[1200px] mx-auto rounded-[28px] sm:rounded-[44px] bg-[#171210] px-6 sm:px-12 md:px-16 py-14 sm:py-20 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* Subtle Glow Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#B08D57]/20 blur-[100px] sm:blur-[140px] pointer-events-none" />

          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#D9C08C] mb-4 sm:mb-5 block relative z-10">
            Start a Project
          </span>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight relative z-10">
            Have a brief that deserves{" "}
            <span className="font-serif italic lowercase font-normal text-[#D9C08C]">
              this level
            </span>{" "}
            of craft?
          </h2>

          <motion.a
            href="mailto:toobasaleem190@gmail.com"
            className="mt-8 sm:mt-10 inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#B08D57] text-[#171210] font-bold text-xs sm:text-sm uppercase tracking-widest relative z-10 hover:bg-[#D9C08C] transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail className="text-base" /> Get In Touch{" "}
            <FiArrowRight className="text-base" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
