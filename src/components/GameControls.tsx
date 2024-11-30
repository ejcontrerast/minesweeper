import React from 'react';
import { motion } from 'framer-motion';

type GameControlsProps = {
  onRestart: () => void;
  gameStatus: 'playing' | 'won' | 'lost'; // Restrict to specific states
};

const GameControls: React.FC<GameControlsProps> = ({ onRestart, gameStatus }) => {
  
  const setDifficulty = (level: string) => {
    console.log(`Difficulty set to: ${level}`);
  };
  const getStatusMessage = () => {
    switch (gameStatus) {
      case 'won':
        return '🎉 You Won!';
      case 'lost':
        return '💥 Game Over!';
      default:
        return '⏳ Playing...';
    }
  };

  return (
    <motion.div
      className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.button
        onClick={onRestart}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        whileTap={{ scale: 0.95 }}
      >
        Restart
      </motion.button>
      <motion.span
        className="text-lg font-semibold text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {getStatusMessage()}
      </motion.span>
      <div className="flex space-x-2">
      {['Easy', 'Medium', 'Hard'].map((level) => (
        <motion.button
          key={level}
          className="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDifficulty(level)}
            >
              {level}
            </motion.button>
          ))}
        </div>
    </motion.div>
  );
};

export default GameControls;
