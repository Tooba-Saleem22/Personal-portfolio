import React from "react";

const Button = ({
  text,
  onClick,
  variant = "light",
  className = "",
  showArrow = false,
}) => {
  const baseStyles = `
    flex items-center justify-center gap-2 
    px-5 py-2.5 
    text-sm 
    rounded-full
    transition-all duration-300
    font-semibold
    cursor-pointer
  `;

  // Default variants agar bahar se customized classes na aayein
  const variants = {
    dark: "bg-black text-white border border-white hover:bg-white hover:text-black",
    light:
      "bg-white text-black border border-black hover:bg-black hover:text-white",
    // Agar hum custom background classes (jaise bg-[#B76E79]) bhej rahe hain,
    // toh hum generic "custom" variant use karenge taaki default colors interfere na karein.
    custom: "",
  };

  // Agar className mein background color ('bg-') pass ho raha hai, toh hum dynamic variant choose karenge
  const selectedVariant = className.includes("bg-")
    ? variants.custom
    : variants[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      <span>{text}</span>
      {/* Arrow sirf tabhi show hoga jab explicitly "showArrow={true}" bheja jaye */}
      {showArrow && (
        <span className="transition-all duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
};

export default Button;
