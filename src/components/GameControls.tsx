import React from 'react';
import { GameLevel, GAME_CONFIGS } from "./utils";
import { Cell } from "./utils";
import { generateCells } from './cellsGenerator';

type GameControlsProps = {
  level: GameLevel;
  setLevel: React.Dispatch<React.SetStateAction<GameLevel>>;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  setBombCounter: React.Dispatch<React.SetStateAction<number>>;
  setLost: React.Dispatch<React.SetStateAction<boolean>>;
  setWon: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

const GameControls: React.FC<GameControlsProps> = ({setLive, setCells, setBombCounter, setLost, setWon, level, setLevel, setTime }) => {
  const setDifficulty = (levelChoosed: GameLevel) => {
    const config = GAME_CONFIGS[levelChoosed];
    setLevel(levelChoosed);
    setLive(false);
    setTime(0)
    setCells(generateCells(config.ROWS, config.COLS, config.BOMBS));
    setLost(false);
    setWon(false);
    setBombCounter(config.BOMBS);
  };

  return (
    <div className="flex gap-2 mb-4 items-center justify-around select-none
      tilt-neon-01 neon-text text-neon-text text-2xl
    ">
      {Object.values(GameLevel).map((levelChoosed) => (
        <button
          key={levelChoosed}
          className={`px-1 py-1.5 text-2xl
          bg-transparent
          text-gray-700 font-medium hover:from-gray-300 hover:to-gray-400 
          active:translate-y-px tilt-neon-01 neon-titles text-neon-titles
          ${level === levelChoosed ? 'text-red-500' : ''}
          ${(levelChoosed === 'Intermediate' && window.innerWidth < 600) || 
            (levelChoosed === 'Expert' && window.innerWidth < 1020) 
            ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if ((levelChoosed === 'Intermediate' && window.innerWidth >= 600) ||
          (levelChoosed === 'Expert' && window.innerWidth >= 1020) ||
          levelChoosed === 'Beginner') {
              setDifficulty(levelChoosed)
            }
          }}
          title={
            (levelChoosed === 'Intermediate' && window.innerWidth < 600) ||
            (levelChoosed === 'Expert' && window.innerWidth < 1020)
              ? 'Only available in larger screen sizes'
              : ''
          }
        >
          {levelChoosed}
        </button>
      ))}
    </div>
  );
};

export default GameControls;
