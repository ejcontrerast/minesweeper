import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {

  return (
    <main className='bg-[#101314] h-screen flex flex-col items-center'>
      <h1 className='pt-32 text-4xl font-extrabold block text-center text-in-range: from-gray-500 to-slate-100'>MineSweeper</h1>
      <div className='pt-10 text-center'>
      <Game />
      </div>
    </main>
  );
};

export default App;
