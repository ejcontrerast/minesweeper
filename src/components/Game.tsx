import React, { useState }  from "react";
import Header from "./Header";
import Board from "./Board";
import GameControls from "./GameControls";
import { generateCells } from "./cellsGenerator";
import { CellState, CellValue } from "./utils";
import { GameLevel, GAME_CONFIGS } from "./utils";


const Game: React.FC = () => {

  const [level, setLevel] = useState<GameLevel>(GameLevel.BEGINNER);
  const [bombCounter, setBombCounter] = useState<number>(GAME_CONFIGS[level].BOMBS);
  const [live, setLive] = useState<boolean>(GAME_CONFIGS[level].LIVE);
  const [cells, setCells] = useState(generateCells(
    GAME_CONFIGS[level].ROWS, 
    GAME_CONFIGS[level].COLS, 
    GAME_CONFIGS[level].BOMBS
  ));
  const [lost, setLost] = React.useState<boolean>(false);
  const [won, setWon] = React.useState<boolean>(false);
  const [time, setTime] = React.useState<number>(0);

  return (
    <div className=" "
    >
      <GameControls
        setLive={setLive} 
        setCells={setCells} 
        setBombCounter={setBombCounter} 
        setLost={setLost}
        setWon={setWon}
        level={level} setLevel={setLevel}
        setTime={setTime}
      />
      <Header 
        live={live} setLive={setLive} 
        setCells={setCells} 
        bombCounter={bombCounter} setBombCounter={setBombCounter} 
        lost={lost} setLost={setLost}
        won={won} setWon={setWon}
        rows={GAME_CONFIGS[level].ROWS}
        cols={GAME_CONFIGS[level].COLS}
        bombs={GAME_CONFIGS[level].BOMBS}
        level={level}
        time={time} setTime={setTime}
      />
      <div className="
      p-4 box-border w-full h-full
      flex flex-col items-center justify-center
      neon-box
      "
      > 
        <Board 
          live={live} setLive={setLive} 
          cells={cells} setCells={setCells} 
          state={CellState.Open} value={CellValue.None} 
          setBombCounter={setBombCounter} 
          lost={lost} setLost={setLost}
          won={won} setWon={setWon}
          rows={GAME_CONFIGS[level].ROWS}
          cols={GAME_CONFIGS[level].COLS}
          bombs={GAME_CONFIGS[level].BOMBS}
        />
      </div>
    </div>
  );
};

export default Game;