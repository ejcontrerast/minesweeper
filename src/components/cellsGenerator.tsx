
const MAX_ROWS = 9
const MAX_COLS = 9

enum CellValue {
  None,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Bomb,
}

enum CellState {
  Open,
  Visible,
  Flagged,
}

type Cell = { 
  value: CellValue;
  state: CellState;
}

export const generateCells = (): Cell[][] =>{
  const cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([])
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({ 
        value: CellValue.None,
        state: CellState.Open,
        })
    }
  }
  return cells;
}


