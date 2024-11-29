import React, {useEffect} from 'react';
import Button from './Button';
import { Cell } from './utils';
import { CellState, CellValue } from './utils';

interface BoardProps {
  state: CellState;
  value: CellValue;
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
  cells: Cell[][];
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  bombCounter: number;
  setBombCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Board: React.FC<BoardProps> = ({live, setLive, cells, setCells, bombCounter, setBombCounter}) => {

const renderCells = (): React.ReactNode => {

  const handleCellClick = (rowParam: number, colParam: number ) => (): void => {
    if (!live) {
      setLive(true);
    }
    console.log("LIVE", live);
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


