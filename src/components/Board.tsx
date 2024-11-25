import React from 'react';
import { motion } from 'framer-motion';
import Cell from './Cell';

const Board: React.FC = () => {
  const gridSize = 8; // Fixed 8x8 grid for simplicity
  const grid = Array.from({ length: gridSize }, () =>
    Array.from({ length: gridSize }, () => ({
      value: 0, // Default value for each cell
      isRevealed: false,
      isFlagged: false,
    }))
  );

  const handleCellClick = (row: number, col: number) => {
    console.log(`Clicked cell at (${row}, ${col})`);
  };

  const handleRightClick = (row: number, col: number, e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Right-clicked cell at (${row}, ${col})`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      mt-4 border-4 border-r-white border-l-[#7b7b7b] border-b-white border-t-[#7b7b7b]
      grid grid-rows-9 grid-cols-9
      gap-1 p-4 bg-gray-800 rounded-lg shadow-lg"
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell.value}
            isRevealed={cell.isRevealed}
            isFlagged={cell.isFlagged}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onRightClick={(e) => handleRightClick(rowIndex, colIndex, e)}
          />
        ))
      )}
    </motion.div>
  );
};

export default Board;
