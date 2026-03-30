import React from "react";

const Button = ({ text, onClick, variant = "light", className = "" }) => {
  const baseStyles = `
    flex items-center gap-2 
    px-3 py-1.5 
    text-sm 
    rounded-lg
    transition-all duration-300
  `;

  const styles =
    variant === "dark"
      ? // For BLACK background
        " bg-black text-white border border-white hover:bg-white hover:text-black"
      : // For WHITE background
        "bg-white text-black border border-black hover:bg-black hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${styles} ${className}`}
    >
      {text} <span className="transition-all duration-300">→</span>
    </button>
  );
};

export default Button;
