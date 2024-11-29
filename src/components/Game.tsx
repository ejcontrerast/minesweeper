import React, { useState }  from "react";
import Header from "./Header";
import Board from "./Board";
import { generateCells } from "./cellsGenerator";
import { CellState, CellValue } from "./utils";


const Game: React.FC = () => {
  const [live, setLive] = useState<boolean>(false);
  const [cells, setCells] = React.useState(generateCells());
  const [bombCounter, setBombCounter] = React.useState<number>(10);

  return (
    <div className=" p-4 w-fit h-fit
    flex flex-col items-center justify-center
    bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <div>
      <Header live={live} setLive={setLive} cells={cells} setCells={setCells} bombCounter={bombCounter} setBombCounter={setBombCounter}/>
      <Board live={live} setLive={setLive} cells={cells} setCells={setCells} state={CellState.Open} value={CellValue.None} bombCounter={bombCounter} setBombCounter={setBombCounter} />
      </div>
    </div>
  );
};

export default Game;