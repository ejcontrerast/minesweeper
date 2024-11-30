import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {

  return (
    <main className='bg-[#101314] h-screen flex flex-col items-center'>
      <h1 className='pt-32 text-4xl block text-white text-center'>Minesweeper</h1>
      <div className='pt-10 text-center'>
      <Game />
      </div>
    </main>
  );
};

export default App;
