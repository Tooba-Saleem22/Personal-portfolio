import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full overflow-visible relative z-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-11  md:py-16 md:mt-11 gap-8 md:gap-10">
        {/* Left side */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 md:w-1/2 w-full max-w-full md:max-w-xl break-words"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full md:max-w-xl break-words">
            Hi! I’m Tooba, a dedicated web developer with a passion for crafting
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

        {/* Right side */}
        <motion.div
          className="md:w-1/2 flex justify-center max-w-md w-full mt-6 md:mt-0"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-sm h-[420px] overflow-hidden rounded-lg shadow-lg pointer-events-none select-none">
            <img
              src="/assets/profile.jpg"
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

export default About;
