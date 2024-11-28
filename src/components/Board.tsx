import React from 'react';
import { generateCells } from './cellsGenerator';
import Button from './Button';


const Board: React.FC = () => {
const [cells, setCells] = React.useState(generateCells());

const renderCells = (): React.ReactNode => {
  return cells.map((row, rowIndex) =>
    row.map((cell, collIndex) => (
    <Button key={`${rowIndex}-${collIndex}`} state={cell.state} value={cell.value} row={rowIndex} col={collIndex} />
  ))
  );

  console.log(cells);
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
