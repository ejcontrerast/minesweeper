import React, {useEffect, useState} from 'react';
import { generateCells } from './cellsGenerator';
import Button from './Button';

interface BoardProps {
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board: React.FC<BoardProps> = ({live, setLive}) => {
const [cells, setCells] = React.useState(generateCells());


const renderCells = (): React.ReactNode => {

  const handleCellClick = (rowParam: number, colParam: number ) => (): void => {
    if (!live) {
      setLive(true);
    }
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


