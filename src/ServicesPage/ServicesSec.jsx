import React from "react";
import { motion } from "framer-motion";

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

const ServicesSec = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-4 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left heading + paragraph */}
        <motion.div
          className="w-full md:w-1/4 flex flex-col justify-start md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mt-11 md:mt-14 md:mb-9 font-bold uppercase text-center md:text-left">
            Services
          </h2>

          <motion.p
            className="text-white text-sm md:text-base leading-relaxed mt-4 text-center md:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I help businesses and individuals bring their ideas to life online.
            From designing clean, modern interfaces to building responsive and
            interactive websites, my focus is on making your digital presence
            look great and work smoothly.
          </motion.p>
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

export default ServicesSec;
