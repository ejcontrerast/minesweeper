import React, {useEffect,useState} from 'react';
import { generateCells } from './cellsGenerator';
import Button from './Button';
import { Face, Cell } from './utils';
import { MAX_COLS, MAX_ROWS } from './utils';
import { CellState, CellValue } from './utils';
import { openMultipleCells, showAllBombs } from './utils';

const Board: React.FC = () => {
const [cells, setCells] = React.useState<Cell[][]>(generateCells());
const [face, setFace] = React.useState<Face>(Face.smile);
const [Live, setLive] = React.useState<boolean>(false);

useEffect(() => {
  const handleMouseDown = (): void => {
    setFace(Face.oh);
  };
  const handleMouseUp = (): void => {
    setFace(Face.smile);
  };
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
  return () => {
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
  };
}, []);


const handleCeelClick = (rowParam: number, colParam: number) => (): void => {
  if (!Live) {
    setLive(true);
  }
  const currentCell = cells[rowParam][colParam];
  if (currentCell.state === CellState.Visible || currentCell.state === CellState.Flagged) {
    return;
  }
  let newCells = cells.slice();
  if (currentCell.value === CellValue.Bomb) {
    setLive(false);
    newCells[rowParam][colParam].state = CellState.Visible;
    newCells = showAllBombs();
    setCells(newCells);
    return;
  } else if (currentCell.value === CellValue.None) {
    newCells = openMultipleCells(cells, rowParam, colParam);
  } else {
    newCells[rowParam][colParam].state = CellState.Visible;
  }
  let safeOpenCellsExists = false;
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const currentCell = newCells[row][col];
      if (currentCell.value !== CellValue.Bomb && currentCell.state === CellState.Open) {
        safeOpenCellsExists = true;
        break;
      }
    }
  }
  if (!safeOpenCellsExists) {
    setLive(false);
    newCells = newCells.map(row =>
      row.map(cell => {
        if (cell.value === CellValue.Bomb) {
          return {
            ...cell,
            state: CellState.Visible
          };
        }
        return cell;
      })
    );
  }
  setCells(newCells);
};


const renderCells = (): React.ReactNode => {
  return cells.map((row, rowIndex) =>
    row.map((cell, collIndex) => (
    <Button key={`${rowIndex}-${collIndex}`} onClick={handleCeelClick} state={cell.state} value={cell.value} row={rowIndex} col={collIndex} />
  ))
  );
}
  return (
    <div
      className="
      mt-4 border-4 border-r-white border-l-[#7b7b7b] border-b-white border-t-[#7b7b7b]
      grid grid-rows-9 grid-cols-9
      "
    >{renderCells()}
    </div>
  );
};

export default Board;


