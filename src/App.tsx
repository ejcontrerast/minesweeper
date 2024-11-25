import React from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App: React.FC = () => {

  return (
    <main>
      <div 
      className="flex items-center justify-center bg-[#c2c2c2] border-4 border-t-white border-b-[#999] border-l-white border-r-[#999]"
      >
        <Header />
        <Board />
      </div>
    </main>
  );
};

export default App;
