import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "I build clean, responsive, and interactive user interfaces that work smoothly on all screen sizes.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    items: ["Figma", "Layouts", "Colors", "Wireframes"],
    description:
      "I design modern, easy-to-use website layouts that focus on user experience and visual clarity.",
  },
  {
    number: "03",
    title: "WordPress Development",
    items: ["Elementor", "Themes", "Blogs"],
    description:
      "I create professional WordPress websites for businesses, portfolios, and personal brands.",
  },
  {
    number: "04",
    title: "E-Commerce",
    items: ["Shopify", "WooCommerce", "Products", "Checkout"],
    description:
      "I build online stores that are simple to manage and designed to convert visitors into customers.",
  },
  {
    number: "05",
    title: "Website Redesign",
    items: ["Speed", "Mobile Friendly", "Modern Look"],
    description:
      "I improve old websites by giving them a fresh design, better layout, and smoother performance.",
  },
  {
    number: "06",
    title: "Tools & Workflow",
    items: ["VS Code", "GitHub", "Responsive Design"],
    description:
      "I use the right tools and clean workflow to deliver fast, reliable, and well-structured websites.",
  },
];

const Skills = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left heading + paragraph */}
        <motion.div
          className="w-full md:w-1/4 flex flex-col justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl mt-11 md:mt-14 md:mb-9 font-bold uppercase text-center md:text-left">
            Skills
          </h2>
        </motion.div>

        {/* Right list */}
        <div className="w-full md:w-3/4 flex flex-col gap-8 md:mt-16 md:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row gap-4 md:gap-10 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Number + Title */}
              <div className="w-full md:w-[180px] md:ml-32 flex-shrink-0 text-center md:text-left">
                <p className="text-sm font-semibold mb-0 text-white">
                  [{service.number}]
                </p>
                <h3 className="text-lg md:text-xl font-bold whitespace-nowrap text-white">
                  {service.title}
                </h3>
              </div>

              {/* Items + Description */}
              <div className="flex-1 text-center md:ml-16 md:text-left">
                <div className="text-sm md:text-base font-semibold mb-1 md:mb-3 text-white">
                  {service.items.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i !== service.items.length - 1 && " • "}
                    </span>
                  ))}
                </div>
                <p className="text-white text-sm md:text-base max-w-full leading-snug">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
