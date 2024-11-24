import React, { useState } from 'react';
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Minesweeper</h1>
      <GameControls onRestart={restartGame} gameStatus={gameStatus} />
      <Board />
    </div>
  );
};

export default App;
