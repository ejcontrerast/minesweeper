import React, {useEffect } from 'react';
import Face from './Face';
import NumberDisplay from './NumberDisplay';
import { Cell } from './utils';
import { GameLevel } from './utils';


interface HeaderProps {
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
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
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({live, setLive, setCells, bombCounter, setBombCounter, lost, setLost, won, setWon, rows, cols, bombs, level,time, setTime}) => {

  
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
    "py-2 px-3 flex items-center justify-between select-none"
    > 
      <NumberDisplay value={bombCounter} />
      <Face 
        live={live} setLive={setLive} 
        setTime={setTime} 
        setCells={setCells} 
        lost={lost} setLost={setLost}
        won={won} setWon={setWon}
        setBombCounter={setBombCounter}
        rows={rows} cols={cols} bombs={bombs}
        level={level}
      />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Header;


