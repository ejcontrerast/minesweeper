import { Cell, MAX_ROWS, MAX_COLS, CellValue, CellState, NUMBER_OF_BOMBS } from "./utils";

// Generate all cells
export const generateCells = (): Cell[][] =>{
  let cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([])
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({ 
        value: CellValue.None,
        state: CellState.Visible, //all cells are open at the beginning
        })
    }
  }
  //randomly put 10 bombs
  let bombsPlaced = 0;
  while (bombsPlaced < NUMBER_OF_BOMBS) {
    const row = Math.floor(Math.random() * MAX_ROWS);
    const col = Math.floor(Math.random() * MAX_COLS);

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
  for (let rowIndex =0; rowIndex < MAX_ROWS; rowIndex++) {  
    for (let colIndex=0; colIndex < MAX_COLS; colIndex++) {
      const currentCell = cells[rowIndex][colIndex];
      if (currentCell.value === CellValue.Bomb) {
        continue;
      }
      let numberOfBombs = 0;
      const topLeftBomb = rowIndex > 0 && colIndex > 0 ? cells[rowIndex - 1][colIndex - 1] : null;
      const topBomb = rowIndex > 0 ? cells[rowIndex - 1][colIndex] : null;
      const topRightBomb = rowIndex > 0 && colIndex < MAX_COLS - 1 ? cells[rowIndex - 1][colIndex + 1] : null;
      const leftBomb = colIndex > 0 ? cells[rowIndex][colIndex - 1] : null;
      const rightBomb = colIndex < MAX_COLS - 1 ? cells[rowIndex][colIndex + 1] : null;
      const bottomLeftBomb = rowIndex < MAX_ROWS - 1 && colIndex > 0 ? cells[rowIndex + 1][colIndex - 1] : null;
      const bottomBomb = rowIndex < MAX_ROWS - 1 ? cells[rowIndex + 1][colIndex] : null;
      const bottomRightBomb = rowIndex < MAX_ROWS - 1 && colIndex < MAX_COLS - 1 ? cells[rowIndex + 1][colIndex + 1] : null;
      
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


