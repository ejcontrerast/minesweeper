import React, {useEffect, useState } from 'react';
import Face from './Face';
import NumberDisplay from './NumberDisplay';
import { Cell } from './utils';
import { GameLevel } from './utils';


interface HeaderProps {
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
  rows: number;
  cols: number;
  bombs: number;
  level: GameLevel;
  setLevel: React.Dispatch<React.SetStateAction<GameLevel>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({live, setLive, cells, setCells, bombCounter, setBombCounter, lost, setLost, won, setWon, rows, cols, bombs, level, setLevel, time, setTime}) => {

  
  useEffect(() => {
    if (live && time < 999) {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    }
  }, [live, time]);



  return (
    <div className= 
    "bg-[#c0c0c0] py-2 px-3 border-4 border-r-white border-b-white border-l-[#7b7b7b] border-t-[#7b7b7b] flex items-center justify-between"
    >
      <NumberDisplay value={bombCounter} />
      <Face 
      live={live} setLive={setLive} 
      time={time} setTime={setTime} 
      cells={cells} setCells={setCells} 
      lost={lost} setLost={setLost}
      won={won} setWon={setWon}
      bombCounter={bombCounter} setBombCounter={setBombCounter}
      rows={rows} cols={cols} bombs={bombs}
      level={level} setLevel={setLevel}
      />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Header;


