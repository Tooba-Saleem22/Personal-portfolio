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
    { name: "Contact", path: "/contacts" }, // We'll handle via mailto
  ];

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 20) {
        setShowNavbar(false); // scroll down
      } else if (currentScrollY < lastScrollY - 10) {
        setShowNavbar(true); // scroll up
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
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] px-6 py-4 md:py-3 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-3xl text-black md:ml-11 font-bold">Tooba</div>

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
              className="text-2xl"
            >
              {mobileMenu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="w-full bg-white flex flex-col items-start py-4 space-y-4 md:hidden">
          {pages.map((page, idx) =>
            page.name === "Contact" ? (
              <div key={idx} className="ml-6">
                <Button
                  text="Contact"
                  onClick={() => {
                    setMobileMenu(false);
                    window.location.href =
                      "mailto:toobasaleem190@gmail.com?subject=Contact Inquiry&body=Hi Tooba,";
                  }}
                />
              </div>
            ) : (
              <Link
                key={idx}
                to={page.path}
                className="text-lg hover:text-black ml-6"
                onClick={() => setMobileMenu(false)}
              >
                {page.name}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
