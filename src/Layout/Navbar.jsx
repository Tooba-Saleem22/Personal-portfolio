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
      if (currentScrollY > lastScrollY + 20) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animated desktop links
  const AnimatedLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setMobileMenu(false)}
      className="relative block overflow-hidden group mt-1"
    >
      <span className="block transition-transform duration-300 transform group-hover:-translate-y-full text-black">
        {children}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-300 transform group-hover:-translate-y-full text-black">
        {children}
      </span>
    </Link>
  );

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] px-6 py-4 md:py-3 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-3xl text-black md:ml-11 font-bold z-50 relative">
            Tooba
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7 md:mt-2 absolute left-1/2 transform -translate-x-1/2">
            {pages
              .filter((page) => page.name !== "Contact")
              .map((page, idx) => (
                <li key={idx} className="relative">
                  <AnimatedLink to={page.path}>{page.name}</AnimatedLink>
                </li>
              ))}
          </ul>

          {/* Right: Desktop Contact Button + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Button */}
            <div className="hidden md:flex">
              <Button
                text="Contact"
                onClick={() =>
                  (window.location.href =
                    "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,")
                }
              />
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-2xl z-50 relative"
              >
                {mobileMenu ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-40 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          {/* Close button */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setMobileMenu(false)} className="text-3xl">
              <FiX />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 mt-4">
            {pages.map((page, idx) =>
              page.name === "Contact" ? (
                <Button
                  key={idx}
                  text="Contact"
                  className="w-full"
                  onClick={() => {
                    setMobileMenu(false);
                    window.location.href =
                      "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,";
                  }}
                />
              ) : (
                <Link
                  key={idx}
                  to={page.path}
                  className="text-lg font-medium"
                  onClick={() => setMobileMenu(false)}
                >
                  {page.name}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
