import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC = () => {
  return (
    <button
      className="
      w-7 h-7
      border-4 border-l-white border-r-[#7b7b7b] border-t-white border-b-[#7b7b7b]
      focus:outline-none"
    >
      
    </button>
  );
};

export default Button;