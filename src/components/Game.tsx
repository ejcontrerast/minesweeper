import React from "react";
import Header from "./Header";
import Board from "./Board";


const Game: React.FC = () => {
  return (
    <div className=" w-auto h-max-100
    flex flex-col items-center justify-center
    bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <h1 className="font-extrabold text-blue-700 text-5xl ">Board Game</h1>
      <Header />
      <Board />
    </div>
  );
};

export default Game;