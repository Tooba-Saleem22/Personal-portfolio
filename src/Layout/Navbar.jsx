import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contacts" },
  ];

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 20 && currentScrollY > 80) {
        if (!mobileMenu) {
          setShowNavbar(false);
        }
      } else if (currentScrollY < lastScrollY - 10) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenu]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  // Animated desktop links
  const AnimatedLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setMobileMenu(false)}
        className="relative block overflow-hidden group mt-1"
      >
        <span
          className={`block transition-transform duration-300 transform group-hover:-translate-y-full ${isActive ? "text-[#B76E79] font-semibold" : "text-[#261214]"}`}
        >
          {children}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-300 transform group-hover:-translate-y-full text-[#B76E79]">
          {children}
        </span>
      </Link>
    );
  };

  return (
    <>
      {/* Floating Capsule Navbar */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] max-w-[1200px] z-40 
        bg-[#FFF5F6]/85 backdrop-blur-xl border border-[#B76E79]/20 px-6 py-4 md:py-3.5 rounded-full 
        shadow-[0_10px_35px_rgba(183,110,121,0.08)] transition-all duration-500 ease-in-out ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-28 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl text-[#261214] font-serif italic tracking-wide font-normal z-40 hover:text-[#B76E79] transition-colors pl-2"
            onClick={() => setMobileMenu(false)}
          >
            Tooba<span className="text-[#B76E79] font-sans not-italic">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 md:mt-0.5 absolute left-1/2 transform -translate-x-1/2">
            {pages
              .filter((page) => page.name !== "Contact")
              .map((page, idx) => {
                const isActive = location.pathname === page.path;
                return (
                  <li key={idx} className="relative flex flex-col items-center">
                    <AnimatedLink to={page.path}>{page.name}</AnimatedLink>
                    {isActive && (
                      <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#B76E79]" />
                    )}
                  </li>
                );
              })}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Desktop Contact Button (Using HTML button for guaranteed styling) */}
            <div className="hidden md:flex">
              <button
                className="bg-[#B76E79] text-white hover:bg-[#8C4A56] transition-all rounded-full px-6 py-2.5 text-xs font-semibold tracking-wider shadow-sm cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "mailto:toobasaleem190@gmail.com?subject=Contact%20Inquiry&body=Hi%20Tooba,")
                }
              >
                Contact
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className="text-2xl text-[#261214] hover:text-[#B76E79] transition-colors p-2 flex items-center justify-center focus:outline-none"
                aria-label="Open Menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-[#FFF5F6] z-50 
        transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button Inside Drawer Top Right */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setMobileMenu(false)}
            className="text-[#261214] hover:text-[#B76E79] transition-colors p-2 flex items-center justify-center focus:outline-none"
            aria-label="Close Menu"
          >
            <FiX className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col h-full px-10 py-24 justify-between">
          {/* Menu Items */}
          <div className="flex flex-col gap-8 mt-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B76E79] font-bold mb-2 block">
              Navigation
            </span>
            {pages.map((page, idx) => {
              const isActive = location.pathname === page.path;
              return page.name === "Contact" ? null : (
                <Link
                  key={idx}
                  to={page.path}
                  className={`text-2xl font-normal tracking-wide py-3 border-b border-[#B76E79]/10 transition-colors block ${
                    isActive
                      ? "text-[#B76E79] font-semibold"
                      : "text-[#261214] hover:text-[#B76E79]"
                  }`}
                  onClick={() => setMobileMenu(false)}
                >
                  {page.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Full Width Contact Button */}
          <div className="w-full mb-6">
            <button
              className="w-full py-4 bg-[#B76E79] text-white hover:bg-[#8C4A56] rounded-full text-sm font-semibold tracking-wider shadow-lg shadow-[#B76E79]/20 active:scale-95 transition-all cursor-pointer"
              onClick={() => {
                setMobileMenu(false);
                window.location.href =
                  "mailto:toobasaleem190@gmail.com?subject=Contact%20Inquiry&body=Hi%20Tooba,";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
