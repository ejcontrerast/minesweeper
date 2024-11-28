import React, {useEffect,useState} from 'react';
import { generateCells } from './cellsGenerator';
import Button from './Button';
import { Face, Cell } from './utils';


const Board: React.FC = () => {
const [cells, setCells] = React.useState<Cell[][]>(generateCells());
const [face, setFace] = React.useState<Face>(Face.smile);


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


const renderCells = (): React.ReactNode => {
  return cells.map((row, rowIndex) =>
    row.map((cell, collIndex) => (
    <Button key={`${rowIndex}-${collIndex}`} state={cell.state} value={cell.value} row={rowIndex} col={collIndex} />
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
