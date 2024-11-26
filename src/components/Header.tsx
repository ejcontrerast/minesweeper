import React from 'react';
import Face from './Face';
import NumberDisplay from './NumberDisplay';


const Header: React.FC = () => {
  return (
    <main className= "bg-[#c0c0c0] py-2 px-3 border-4 border-r-white border-b-white border-l-[#7b7b7b] border-t-[#7b7b7b]    flex items-center space-between"
    >
      <NumberDisplay value={0} />
      <Face />
      <NumberDisplay value={23} />
    </main>
  );
};

export default Header;