import React, { useEffect } from "react";
import { Face as FaceEnum } from './utils';
import { generateCells } from './cellsGenerator';
import { Cell } from './utils';

interface FaceProps {
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  cells: Cell[][];
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  lost: boolean;
  setLost: React.Dispatch<React.SetStateAction<boolean>>;
  won: boolean;
  setWon: React.Dispatch<React.SetStateAction<boolean>>;
  bombCounter: number;
  setBombCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Face: React.FC<FaceProps> = ({live, setLive, time, setTime, cells, setCells, lost, setLost, won, setWon, bombCounter, setBombCounter}) => {
    const [face, setFace] = React.useState<FaceEnum>(FaceEnum.Smile);

    useEffect(() => {
      const handleMousedown = (e: MouseEvent): void => {
        
        const boardElement = document.querySelector('.board-container');
        if (boardElement?.contains(e.target as Node)) {
          setFace(FaceEnum.Oh);
        }
      }
    
      const handleMouseup = (e: MouseEvent): void => {
        const boardElement = document.querySelector('.board-container');
        if (boardElement?.contains(e.target as Node)) {
          setFace(FaceEnum.Smile);
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
          setLive(false);
          setTime(0)
          setCells(generateCells());
          setLost(false);
          setWon(false);
          setBombCounter(10);
      }

    useEffect(() => {
        if (lost) {
          setFace(FaceEnum.Lost);
        } else if (live) {
          setFace(FaceEnum.Smile);
        } else {
          setFace(FaceEnum.Won);
        }
      }, [lost, live]);

    useEffect(() => {
        if (won) {
          setFace(FaceEnum.Won);
          setLive(false);
        }
      }, [won]);


    return (
        <main className= "">
            <div className="bg-[#c0c0c0] border-4 text-3xl
             border-l-white border-t-white border-r-[#7b7b7b] border-b-[#7b7b7b] 
             active:border-t-[#7b7b7b] active:border-b-white active:border-l-[#7b7b7b] active:border-r-white
             w-12 h-12 flex items-center justify-center cursor-pointer"
             onClick={handleFaceClick}
             >
                <span role="img" aria-label="Face">{face}</span>
            </div>
        </main>
    );
}

export default Face;    
