// Button.jsx
import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border border-black bg-white text-black  px-3 py-1.5 text-sm transition-all duration-300 hover:bg-black hover:text-white ${className}`}
    >
      {text} <span className="transition-all duration-300">→</span>
    </button>
  );
};

export default Button;
