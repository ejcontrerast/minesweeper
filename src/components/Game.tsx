import React, { useState }  from "react";
import Header from "./Header";
import Board from "./Board";


const Game: React.FC = () => {
  const [live, setLive] = useState<boolean>(false);

  return (
    <div className=" p-4 w-fit h-fit
    flex flex-col items-center justify-center
    bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <div>
      <Header live={live} />
      <Board live={live} setLive={setLive} />
      </div>
    </div>
  );
};

export default Game;