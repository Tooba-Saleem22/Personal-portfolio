import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <footer className="w-full bg-black text-white py-6 md:py-12 border-t border-white/30 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-6 md:gap-0">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Message */}
          <span className="text-sm md:text-base font-semibold">
            Let's connect!
          </span>

          {/* Email */}
          <a
            href="mailto:toobasaleem190@gmail.com"
            className="relative overflow-hidden border border-white rounded-full px-3 py-1 text-sm md:px-4 md:py-1.5 inline-block w-fit group"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative text-white group-hover:text-black lowercase">
              toobasaleem190@gmail.com
            </span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-11 w-full md:w-1/2 md:ml-12">
          {/* Links */}
          <div className="flex flex-col gap-1 text-lg md:text-xl text-left">
            <a
              href="/services"
              className="hover:text-red-500 transition-colors"
            >
              Services
            </a>
            <a href="/about" className="hover:text-red-500 transition-colors">
              About
            </a>
          </div>

          {/* Social + Privacy */}
          <div className="flex flex-col gap-2 md:gap-4 text-lg md:text-xl text-left">
            <div className="flex gap-3 mt-4 md:mt-6">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white flex items-center justify-center bg-black text-white hover:bg-white hover:text-black transition w-8 h-8"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>

            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm mt-2 md:mt-4 hover:underline"
            >
              Privacy Policy 2026, Tooba Saleem
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
