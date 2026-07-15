import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../components/Button";

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
        // Dropdowns closed on scroll hide
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
            className="text-xl md:text-2xl text-[#261214] font-serif italic tracking-wide font-normal z-50 hover:text-[#B76E79] transition-colors pl-2"
            onClick={() => setMobileMenu(false)}
          >
            Tooba<span className="text-[#B76E79] font-sans not-italic">.</span>
          </Link>

          {/* Desktop Menu - Perfectly Centered */}
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

          {/* Right: Desktop Contact Button + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop Contact Button */}
            <div className="hidden md:flex">
              <Button
                text="Contact"
                className="bg-[#B76E79] text-white hover:bg-[#8C4A56] transition-all rounded-full px-5 py-1.5 text-xs font-semibold tracking-wider"
                onClick={() =>
                  (window.location.href =
                    "mailto:toobasaleem190@gmail.com?subject=Contact%20Inquiry&body=Hi%20Tooba,")
                }
              />
            </div>

            {/* Mobile Hamburger (Now has high z-index when open to stay on top of the drawer) */}
            <div className="md:hidden z-55">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-2xl text-[#261214] hover:text-[#B76E79] transition-colors p-2 flex items-center justify-center focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenu ? (
                  <FiX className="text-[#261214] size-6" />
                ) : (
                  <FiMenu className="text-[#261214] size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Blur Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-[#3D1E22]/35 backdrop-blur-sm z-45 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80vw] max-w-[300px] bg-[#FFF5F6] border-l border-[#B76E79]/10 shadow-2xl z-50 
        transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full px-8 py-24 justify-between">
          {/* Menu Items */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B76E79] font-bold mb-2 block">
              Navigation
            </span>
            {pages.map((page, idx) => {
              const isActive = location.pathname === page.path;
              return page.name === "Contact" ? null : (
                <Link
                  key={idx}
                  to={page.path}
                  className={`text-lg font-normal tracking-wide py-2 border-b border-[#B76E79]/5 transition-colors block ${
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

          {/* Mobile Footer Contact Button */}
          <div className="w-full">
            <Button
              text="Get in Touch"
              className="w-full py-3 bg-[#B76E79] text-white rounded-full font-medium tracking-wider shadow-lg shadow-[#B76E79]/20 active:scale-95 transition-transform"
              onClick={() => {
                setMobileMenu(false);
                window.location.href =
                  "mailto:toobasaleem190@gmail.com?subject=Contact%20Inquiry&body=Hi%20Tooba,";
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
