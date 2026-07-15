import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/Tooba-Saleem22",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/tooba-saleem-51491931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <footer className="w-full bg-[#2A1115] text-[#FFF5F6] py-12 md:py-16 border-t border-[#B76E79]/20 shadow-inner rounded-t-[2rem] md:rounded-t-[3rem] relative overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute -bottom-10 left-10 w-[250px] h-[250px] bg-[#B76E79]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start relative z-10">
        {/* LEFT SIDE: Brand & Call to Action */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.3em] text-[#EFA7B1] font-bold">
              Let's build together
            </span>
            <span className="text-2xl md:text-3xl font-serif italic font-light mt-1">
              Have a vision? Let’s connect.
            </span>
          </div>

          {/* Luxury Hover Email Pill */}
          <a
            href="mailto:toobasaleem190@gmail.com"
            className="relative overflow-hidden border border-[#EFA7B1]/30 rounded-full px-5 py-2 text-sm inline-block w-fit group bg-[#FFF5F6]/5 backdrop-blur-sm transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#EFA7B1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            <span className="relative text-[#FFF5F6] group-hover:text-[#2A1115] font-medium tracking-wide lowercase transition-colors duration-300">
              toobasaleem190@gmail.com
            </span>
          </a>
        </div>

        {/* RIGHT SIDE: Navigation & Socials */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full md:w-auto">
          {/* Quick Links */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#EFA7B1]/60 font-bold mb-1">
              Explore
            </span>
            <Link
              to="/services"
              className="text-base text-[#FFF5F6]/85 hover:text-[#EFA7B1] transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-base text-[#FFF5F6]/85 hover:text-[#EFA7B1] transition-colors duration-300"
            >
              About
            </Link>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col gap-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#EFA7B1]/60 font-bold">
              Follow Me
            </span>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#EFA7B1]/20 flex items-center justify-center bg-[#FFF5F6]/5 text-[#FFF5F6] hover:bg-[#EFA7B1] hover:text-[#2A1115] hover:border-[#EFA7B1] transition-all duration-300 w-9 h-9 shadow-md"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>

            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EFA7B1]/40 text-xs mt-4 hover:text-[#EFA7B1] hover:underline transition-colors duration-300"
            >
              Privacy Policy 2026, Tooba Saleem [cite: The user provided a draft
              for a LinkedIn post stating, "For the past 2 years, I have been
              freelancing as a web developer and working with clients online...
              — Tooba" and requested her full name to be displayed on her
              profile layout. Conversation Date: 2026-06.]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
