import React from 'react';
import Button from './Button';
import { Cell } from './utils';
import { CellState, CellValue } from './utils';
import { openMultipleCells } from './utils';
import { generateCells } from './cellsGenerator';

interface BoardProps {
  state: CellState;
  value: CellValue;
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
}

const Board: React.FC<BoardProps> = ({live, setLive, cells, setCells, bombCounter, setBombCounter, lost, setLost, won, setWon}) => {

const renderCells = (): React.ReactNode => {

  const showAllBombs = (): Cell[][] => {
    const newCells = cells.slice();
    return newCells.map(row => row.map(cell => {
      if (cell.value === CellValue.Bomb) {
        return {
          ...cell,
          state: CellState.Visible
        };
      }
      return cell;
    }));
  }
  
  const handleCellClick = (rowParam: number, colParam: number ) => (): void => {
    let newCells = cells.slice();
    
    if (!live) {
          let isABomb = cells[rowParam][colParam].value === CellValue.Bomb;
          while (isABomb) {
          newCells = generateCells();
          if (newCells[rowParam][colParam].value !== CellValue.Bomb) {
            isABomb = false;
            break;
          }
        }
        setLive(true);
    }
    
    
    const currentCell = newCells[rowParam][colParam];
    if (currentCell.state === CellState.Visible || currentCell.state === CellState.Flagged) {
      return;
    }

    if (currentCell.value === CellValue.Bomb) {
      setLost(true);
      newCells[rowParam][colParam].red = true;
      newCells = showAllBombs();
      setCells(newCells);
      setLive(false);
      return;
    } else if (currentCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam, colParam);
      setCells(newCells);
    } else {
      newCells[rowParam][colParam].state = CellState.Visible;
    }

    let safeOpenCellsExists = false;

    for (let row = 0; row < cells.length; row++) {
      for (let col = 0; col < cells[row].length; col++) {
        const currentCell = newCells[row][col];
        if (currentCell.value !== CellValue.Bomb && currentCell.state === CellState.Open) {
          safeOpenCellsExists = true;
        }
      }
    }


    if (!safeOpenCellsExists) {
      newCells = newCells.map(row => row.map(cell => {
        if (cell.value === CellValue.Bomb) {
          return {
            ...cell,
            state: CellState.Flagged
          };
        }
        return cell;
      }));
      setWon(true);
      setLive(false);
    }

    setCells(newCells);
  }



  const handleCellContext = (rowParam: number, colParam: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault();
    if (!live) {
      return;
    }
    const currentCells = cells.slice();
    const currentCell = currentCells[rowParam][colParam];

    if (currentCell.state === CellState.Visible) {
      return;
    } else if (currentCell.state === CellState.Open) {
      currentCell.state = CellState.Flagged;
      setBombCounter((prev) => prev - 1);
    } else if (currentCell.state === CellState.Flagged) {
      currentCell.state = CellState.Open;
      setBombCounter((prev) => prev + 1);
    }
    setCells(currentCells);
  }

  return cells.map((row, rowIndex) =>
    row.map((cell, collIndex) => (
    <Button 
      key={`${rowIndex}-${collIndex}`} 
      state={cell.state} 
      value={cell.value} 
      row={rowIndex} 
      col={collIndex}
      onClick={handleCellClick}
      onContext={handleCellContext}
      red={cell.red}
    />
  ))
  );

}
  return (
    <div
      className="
      mt-4 border-4 border-r-white border-l-[#7b7b7b] border-b-white border-t-[#7b7b7b]
      grid grid-rows-9 grid-cols-9
      shadow-lg"
    >{renderCells()}
    </div>
  );
};

export default Board;



