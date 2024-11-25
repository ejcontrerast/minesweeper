import React from "react";
import Header from "./Header";
import Board from "./Board";


const Game: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <h1 className="font-extrabold font-blue ">Board Game</h1>
      <Header />
      <Board />
    </div>
  );
};

export default Game;