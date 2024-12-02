import React from "react";
import { CellValue, CellState } from "./utils";
import minesvg from "../assets/mine.svg";
import { motion } from "framer-motion";



interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  red?: boolean;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
}

const Button: React.FC<ButtonProps> = ({row, col, onContext, onClick, state, value, red}) => {
    const renderContent = (): React.ReactNode => {
        if (state === CellState.Visible) {
            if (value === CellValue.Bomb) {
            return (
                <span role="img" aria-label="bomb" className="flex items-center justify-center w-full h-full">
                  <img src={minesvg} alt="bomb" className="w-6 h-6" />
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
    <motion.div
     /*  initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.1 }} */
      
      className={`
        cellBtn  
        ${state === CellState.Visible ? 'cellBtnVisible pointer-events-none' : ''}
        ${state === CellState.Visible || state === CellState.Flagged ? `value-${value}` : ''}
        value-${value} ${red ? 'red' : ''}
      `}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {renderContent()}
    </motion.div>
  );
};

export default Button;