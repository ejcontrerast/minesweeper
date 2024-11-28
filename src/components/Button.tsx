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
        cellBtn  value-${value}
        ${state === CellState.Visible ? 'cellBtnVisible' : ''}
        ${state === CellState.Visible || state === CellState.Flagged ? `value-${value}` : ''}
      `}
    >
      {renderContent()}
    </div>
  );
};

export default Button;