import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
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
const GOLD = "#B08D57";
const GOLD_LIGHT = "#D9C08C";
const ESPRESSO = "#171210";
const TEXT_MUTED = "#7C7266";

const servicesData = [
  {
    number: "01",
    title: "Web Design",
    tagline: "Layouts that look as good as they work",
    description:
      "Clean, modern interfaces built around your brand and your audience — not a generic template. Every layout is planned before a single pixel is placed, so the site looks intentional on every screen size.",
    deliverables: [
      "Custom layout & wireframes",
      "Responsive design (mobile → desktop)",
      "Brand-aligned colour & type system",
      "Figma source files",
    ],
    tags: ["Layout", "Colour Systems", "UI"],
  },
  {
    number: "02",
    title: "Frontend Development",
    tagline: "Fast, clean, built to last",
    description:
      "Interactive, performant websites built with React and modern tooling. Code is structured for maintainability, so future updates don't mean starting over.",
    deliverables: [
      "React component architecture",
      "Smooth animation & interaction",
      "Performance & SEO basics",
      "Cross-browser testing",
    ],
    tags: ["React", "Framer Motion", "Interactive Design"],
  },
  {
    number: "03",
    title: "WordPress Websites",
    tagline: "Easy for you to manage, day one",
    description:
      "Custom WordPress builds for businesses, portfolios, and personal brands — designed so you can update content yourself without touching code.",
    deliverables: [
      "Elementor / custom theme build",
      "Editable content blocks",
      "Blog & CMS setup",
      "Basic training walkthrough",
    ],
    tags: ["Elementor", "Blogs", "Business Sites"],
  },
  {
    number: "04",
    title: "Shopify Stores",
    tagline: "Ready to sell from launch day",
    description:
      "Complete online stores with a smooth checkout, clear product presentation, and design that builds trust with first-time buyers.",
    deliverables: [
      "Store setup & theme customisation",
      "Product & collection structure",
      "Payment & shipping configuration",
      "Launch checklist",
    ],
    tags: ["Products", "Payments", "Design"],
  },
  {
    number: "05",
    title: "UI to Website",
    tagline: "Your design, built pixel-for-pixel",
    description:
      "Already have a Figma, XD, or PSD design? I convert it into a fully working, responsive website that matches your file precisely — down to spacing and type.",
    deliverables: [
      "Pixel-accurate implementation",
      "Responsive breakpoints",
      "Interaction & hover states",
      "Design-to-code QA pass",
    ],
    tags: ["Figma", "XD", "PSD"],
  },
  {
    number: "06",
    title: "Website Redesign",
    tagline: "The same site, finally working for you",
    description:
      "For sites that feel outdated or slow. I audit what's holding the current version back and rebuild it with a modern layout, better performance, and a mobile experience that actually works.",
    deliverables: [
      "Existing site audit",
      "Modern layout & visual refresh",
      "Speed & mobile optimisation",
      "Content migration",
    ],
    tags: ["Speed", "Mobile", "Modern Look"],
  },
];

const processData = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We talk through your goals, audience, and what the site needs to achieve — no jargon, just a clear plan.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "You'll see layout concepts early, then a working build as it comes together — feedback welcome at every stage.",
  },
  {
    step: "03",
    title: "Launch & Support",
    desc: "I handle deployment and stay on for fixes, tweaks, or questions after the site goes live.",
  },
];

const faqsData = [
  {
    question: "How do I know which service I need?",
    answer:
      "If you're not sure, just describe what you're trying to achieve on a call — I'll recommend the right scope rather than upselling everything.",
  },
  {
    question: "Do you work with an existing design, or from scratch?",
    answer:
      "Both. I can build directly from a Figma/XD/PSD file, or design the layout with you from the ground up.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Brand assets if you have them, a sense of sites you like, and rough content (or I can help structure that too).",
  },
  {
    question: "Is support included after launch?",
    answer:
      "Yes — every project includes a post-launch window for fixes and small updates, with ongoing maintenance available after that.",
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
            Expertise Store
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#1E1712] leading-[1.02] max-w-4xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            What I{" "}
            <span className="font-serif italic lowercase font-light text-[#B08D57]">
              offer
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[#7C7266] text-base md:text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Six ways to work together, from a brand-new site to a redesign of
            one that's holding you back. Tap a service to see what's included.
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
              How We'll Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1E1712]">
              A Simple Process
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
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-5">
            Quoted to the Project, Not a Price List
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
            Every brief is different, so every quote is too. Share what you need
            and I'll come back with a clear scope and price — no surprises once
            we start.
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
            Tell me about{" "}
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
