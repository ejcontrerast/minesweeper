import React from "react";
import { CellValue, CellState } from "./utils";
import { motion } from "framer-motion";
import Flag from "./svg/Flag";
import Mine from "./svg/Mine";
import Explode from "./svg/BombExplosion";


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
                    <Mine className={`w-5 h-5 neon-svg neon-bomb ${red ? 'hidden' : ''}`} />
                    <Explode className={`w-5 h-5 neon-svg neon-explosion ${red ? '' : 'hidden'}`} />
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
                    <Flag className="w-5 h-5 neon-svg neon-flag " />
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
        cellBtn neon-cell
        ${state === CellState.Visible ? 'cellBtnVisible pointer-events-none' : ''}
        ${state === CellState.Visible || state === CellState.Flagged ? `value-${value} neon-text` : ''}
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