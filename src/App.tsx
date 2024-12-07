import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {

  return (
    <main className='bg-[#101314] h-dvh flex flex-col items-center'>
      <h1 className='
      pt-20 text-6xl font-["VT323"] font-extrabold block text-center drop-shadow-[0_5px_5px_rgba(239,68,68,2)] text-gray-200 select-none
      '
      >MineSweeper</h1>
      <div className='pt-10 text-center'>
      <Game />
      </div>
    </main>
  );
};

export default App;


/* Brainstorm updates:
- Place Hint button
- Change Color Scheme
  - Set variables for colors
  - Change the colors in the CSS
- Add recursive part when all the bombs are flagged
- Add a Leaderboard
  - Record the time in milliseconds
  - Record the level
  - Record the date
  - Record the name
  - Add a form to submit the time
*/