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

  return cells;
}


