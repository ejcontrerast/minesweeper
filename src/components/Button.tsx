import React from "react";
import { CellValue, CellState } from "./utils";


interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

const Button: React.FC<ButtonProps> = ({row, col, state, value}) => {
    const renderContent = (): React.ReactNode => {
        if (state === CellState.Visible) {
            if (value === CellValue.Bomb) {
            return (
                <span role="img" aria-label="bomb" className="flex items-center justify-center w-full h-full">
                💣
                </span>
            );
            }
            if (value === CellValue.None) {
            return null;
            }
            return value;
        } else if (state === CellState.Flagged) {
            return (
                <span role="img" aria-label="flag" className="flex items-center justify-center w-full h-full">
                    🚩
                </span> 
            );
        }
        return null;
    }

  return (
    <div
      className={`
      w-7 h-7 border-4 bg-[#c0c0c0] 
     ${state === CellState.Visible 
        ? 'border-2 border-[#7b7b7b] ' 
        : 'border-l-white border-r-[#7b7b7b] border-t-white border-b-[#7b7b7b]'}
      focus:outline-none  
      active:border-t-[#7b7b7b] active:border-b-white active:border-l-[#7b7b7b] active:border-r-white
      ${state === CellState.Visible || state === CellState.Flagged ? value : ''}`}
    >{renderContent()}
    </div>
  );
};

export default Button;