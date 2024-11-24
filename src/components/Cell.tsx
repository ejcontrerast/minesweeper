import React from 'react';
import { motion } from 'framer-motion';

type CellProps = {
  value: number | 'M'; // 'M' for mine
  isRevealed: boolean;
  isFlagged: boolean; // New prop for flagged state
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
};

const getColorClass = (value: number | 'M') => {
  if (value === 'M') return '';
  const colorMap: { [key: number]: string } = {
    1: 'text-blue-500',
    2: 'text-green-500',
    3: 'text-red-500',
    4: 'text-purple-500',
    5: 'text-yellow-500',
    6: 'text-teal-500',
    7: 'text-orange-500',
    8: 'text-pink-500',
  };
  return colorMap[value] || '';
};

const Cell: React.FC<CellProps> = ({
  value,
  isRevealed,
  isFlagged,
  onClick,
  onRightClick,
}) => {
  const cellContent = () => {
    if (!isRevealed) return isFlagged ? '🚩' : null; // Show flag or keep blank
    if (value === 'M') return '💣'; // Show mine
    return value || null; // Show number or nothing for empty cells
  };

  return (
    <motion.div
      className={`w-10 h-10 flex items-center justify-center border rounded-lg cursor-pointer transition-all ${
        isRevealed
          ? 'bg-gray-300 text-gray-800'
          : 'bg-blue-600 hover:bg-blue-500 text-white'
      } ${getColorClass(value)}`}
      animate={isRevealed ? { rotateY: 180 } : { rotateY: 0 }}
      transition={{ duration: 0.4 }}  
      whileHover={{ scale: isRevealed ? 1 : 1.1 }} // No hover effect for revealed cells
      whileTap={{ scale: 0.9 }} // Subtle tap animation
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <span
        className={`text-lg font-semibold`}>
        {cellContent()}
      </span>
    </motion.div>
  );
};

export default Cell;

