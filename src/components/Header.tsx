import React, {useEffect} from 'react';
import Face from './Face';
import NumberDisplay from './NumberDisplay';


interface HeaderProps {
  live: boolean;
}

const Header: React.FC<HeaderProps> = ({live}) => {
  const [time, setTime] = React.useState<number>(0);
  
  useEffect(() => {
    if (live) {
      const timer = setInterval(() => {
        console.log("Time",time);
        setTime(time + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    }
  }, [live, time]);



  return (
    <div className= 
    "bg-[#c0c0c0] py-2 px-3 border-4 border-r-white border-b-white border-l-[#7b7b7b] border-t-[#7b7b7b] flex items-center justify-between"
    >
      <NumberDisplay value={0} />
      <Face />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Header;


