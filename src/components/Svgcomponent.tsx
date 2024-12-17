import React from "react";

interface SvgProps {
  svg: string;
  className?: string; // Optional className for styling
}

const SvgComponent: React.FC<SvgProps> = ({ svg, className }) => {
  return <img src={svg} className={className} alt="icon" />;
};

export default SvgComponent;
