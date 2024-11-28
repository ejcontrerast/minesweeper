import React, {useState} from 'react';
import Face from './Face';
import NumberDisplay from './NumberDisplay';

const [time, setTime] = React.useState<number>(0);

const Header: React.FC = () => {
  return (
    <div className= 
    "bg-[#c0c0c0] py-2 px-3 border-4 border-r-white border-b-white border-l-[#7b7b7b] border-t-[#7b7b7b] flex items-center justify-between"
    >
      <NumberDisplay value={2} />
      <Face />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Header;