import { Cell, CellValue, CellState } from "./utils";

// Generate all cells
export const generateCells = (
  rows: number,
  cols: number, 
  bombs: number
): Cell[][] =>{
  let cells: Cell[][] = [];

  for (let row = 0; row < rows; row++) {
    cells.push([])
    for (let col = 0; col < cols; col++) {
      cells[row].push({ 
        value: CellValue.None,
        state: CellState.Open, //all cells are open at the beginning
        })
    }
  }
  //randomly put 10 bombs
  let bombsPlaced = 0;
  while (bombsPlaced < bombs) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);

    const currentCell = cells[row][col];
    if (currentCell.value !== CellValue.Bomb) {
      cells[row][col] = {
        ...cells[row][col],
        value: CellValue.Bomb,
      }
      bombsPlaced++;
    }
  }


  //Calculate the numbers for each cell
  for (let rowIndex =0; rowIndex < rows; rowIndex++) {  
    for (let colIndex=0; colIndex < cols; colIndex++) {
      const currentCell = cells[rowIndex][colIndex];
      if (currentCell.value === CellValue.Bomb) {
        continue;
      }
      let numberOfBombs = 0;
      const topLeftBomb = rowIndex > 0 && colIndex > 0 ? cells[rowIndex - 1][colIndex - 1] : null;
      const topBomb = rowIndex > 0 ? cells[rowIndex - 1][colIndex] : null;
      const topRightBomb = rowIndex > 0 && colIndex < cols - 1 ? cells[rowIndex - 1][colIndex + 1] : null;
      const leftBomb = colIndex > 0 ? cells[rowIndex][colIndex - 1] : null;
      const rightBomb = colIndex < cols - 1 ? cells[rowIndex][colIndex + 1] : null;
      const bottomLeftBomb = rowIndex < rows - 1 && colIndex > 0 ? cells[rowIndex + 1][colIndex - 1] : null;
      const bottomBomb = rowIndex < rows - 1 ? cells[rowIndex + 1][colIndex] : null;
      const bottomRightBomb = rowIndex < rows - 1 && colIndex < cols - 1 ? cells[rowIndex + 1][colIndex + 1] : null;
      
      const adjacentCells = [
        topLeftBomb,
        topBomb,
        topRightBomb,
        leftBomb,
        rightBomb,
        bottomLeftBomb,
        bottomBomb,
        bottomRightBomb,
      ];
      
      adjacentCells.forEach(cell => {
        if (cell && cell.value === CellValue.Bomb) {
          numberOfBombs++;
        }

      });
      if (numberOfBombs > 0) {
        cells[rowIndex][colIndex] = {
          ...currentCell,
          value: numberOfBombs,
        }
      }
    }
  }


  return cells;
}


