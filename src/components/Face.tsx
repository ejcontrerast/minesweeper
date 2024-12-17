import React, { useEffect } from "react";
import { FaceComponents, FaceType } from './utils';
import { generateCells } from './cellsGenerator';
import { Cell } from './utils';
import { GameLevel, GAME_CONFIGS } from './utils';

interface FaceProps {
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  lost: boolean;
  setLost: React.Dispatch<React.SetStateAction<boolean>>;
  won: boolean;
  setWon: React.Dispatch<React.SetStateAction<boolean>>;
  setBombCounter: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  cols: number;
  bombs: number;
  level: GameLevel;
}

const Face: React.FC<FaceProps> = ({live, setLive, setTime, setCells, lost, setLost, won, setWon, setBombCounter, rows, cols, bombs, level}) => {
    const [face, setFace] = React.useState<FaceType>("Smile");

    useEffect(() => {
      const handleMousedown = (e: MouseEvent): void => {
        
        const boardElement = document.querySelector('.board-container');
        if (boardElement?.contains(e.target as Node)) {
          setFace("Oh");
        }
      }
    
      const handleMouseup = (e: MouseEvent): void => {
        const boardElement = document.querySelector('.board-container');
        if (boardElement?.contains(e.target as Node)) {
          setFace("Smile");
        }
      }
    
      window.addEventListener('mousedown', handleMousedown);
      window.addEventListener('mouseup', handleMouseup);
      
      return () => {
        window.removeEventListener('mousedown', handleMousedown);
        window.removeEventListener('mouseup', handleMouseup);
      }
    }, []);

      const handleFaceClick = (): void => {
          const config = GAME_CONFIGS[level];
          console.log(level);
          setLive(false);
          setTime(0)
          setCells(generateCells(rows, cols, bombs));
          setLost(false);
          setWon(false);
          setBombCounter(config.BOMBS);
      }

    useEffect(() => {
        if (lost) {
          setFace("Lost");
        } else if (live) {
          setFace("Smile");
        } else {
          setFace("Won");
        }
      }, [lost, live]);

    useEffect(() => {
        if (won) {
          setFace("Won");
          setLive(false);
        }
      }, [won]);


    return (
        <main className= "">
            <div className="text-3xl mb-5
             cellBtn active:border-b-neon-color active:border-r-neon-color active:border-t-neon-shade active:border-l-neon-shade
             !w-16 !h-16 flex items-center justify-center cursor-pointer"
             onClick={handleFaceClick}
             >
                <span role="img" aria-label="Face">{FaceComponents[face]}</span>
            </div>
        </main>
    );
}

export default Face;    
