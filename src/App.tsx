import React, { useState } from 'react';
import NumberDisplay from './components/NumberDisplay';
import Board from './components/Board';
import GameControls from './components/GameControls';

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const restartGame = () => {
    console.log('Game restarted');
    setGameStatus('playing');
    // Reset board and game state
  };

  return (
    <div className="bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]">
      <div className=''>Header
        <NumberDisplay value={0} />
        <NumberDisplay value={23} />
      </div>
      <div className=''>Body</div>
    </div>
  );
};

export default App;
