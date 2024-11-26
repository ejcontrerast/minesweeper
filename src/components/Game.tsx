import React from "react";
import Header from "./Header";
import Board from "./Board";


const Game: React.FC = () => {
  return (
    <div className=" p-4
    flex flex-col items-center justify-center
    bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <div>
        <Header />
        <Board />
      </div>
    </div>
  );
};

export default Game;