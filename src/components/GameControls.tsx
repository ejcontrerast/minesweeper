import React from 'react';
import { GameLevel, GAME_CONFIGS } from "./utils";
import { Cell } from "./utils";
import { generateCells } from './cellsGenerator';

type GameControlsProps = {
  level: GameLevel;
  setLevel: React.Dispatch<React.SetStateAction<GameLevel>>;
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
  cells: Cell[][];
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  bombCounter: number;
  setBombCounter: React.Dispatch<React.SetStateAction<number>>;
  lost: boolean;
  setLost: React.Dispatch<React.SetStateAction<boolean>>;
  won: boolean;
  setWon: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

const GameControls: React.FC<GameControlsProps> = ({ live, setLive, cells, setCells, bombCounter, setBombCounter, lost, setLost, won, setWon, level, setLevel, time, setTime }) => {
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
    <div className="flex gap-2 mb-4 items-center justify-around">
      {Object.values(GameLevel).map((levelChoosed) => (
        <button
          key={levelChoosed}
          className={`px-1  py-1.5 text-2xl
          bg-transparent
          text-gray-700 font-medium hover:from-gray-300 hover:to-gray-400 
          active:translate-y-px ${level === levelChoosed ? ' text-red-500' : ''}`}
          style={{ fontFamily: 'VT323, monospace' }}
          onClick={() => setDifficulty(levelChoosed)}
        >
          {levelChoosed}
        </button>
      ))}
    </div>
  );
};

export default GameControls;
