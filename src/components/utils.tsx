export const MAX_ROWS = 9;
export const MAX_COLS = 9;
export const NUMBER_OF_BOMBS = 10;
export enum CellValue {
  None,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Bomb
}
export enum CellState {
  Open,
  Visible,
  Flagged
}
export type Cell = {
  value: CellValue;
  state: CellState;
  red?: boolean
};
export enum Face {
  Smile = "😀",
  Oh = "😲",
  Lost = "😵",
  Won = "😎"
}

const grabAllAdjacentCells = (cells: Cell[][], rowParam: number, colParam: number)
: {
  topLeftCell: Cell | null;
  topCell: Cell | null;
  topRightCell: Cell | null;
  leftCell: Cell | null;
  rightCell: Cell | null;
  bottomLeftCell: Cell | null;
  bottomCell: Cell | null;
  bottomRightCell: Cell | null;
} => {

  const topLeftCell = rowParam > 0 && colParam > 0 ? cells[rowParam - 1][colParam - 1] : null;
  const topCell = rowParam > 0 ? cells[rowParam - 1][colParam] : null;
  const topRightCell = rowParam > 0 && colParam < MAX_COLS - 1 ? cells[rowParam - 1][colParam + 1] : null;
  const leftCell = colParam > 0 ? cells[rowParam][colParam - 1] : null;
  const rightCell = colParam < MAX_COLS - 1 ? cells[rowParam][colParam + 1] : null;
  const bottomLeftCell = rowParam < MAX_ROWS - 1 && colParam > 0 ? cells[rowParam + 1][colParam - 1] : null;
  const bottomCell = rowParam < MAX_ROWS - 1 ? cells[rowParam + 1][colParam] : null;
  const bottomRightCell = rowParam < MAX_ROWS - 1 && colParam < MAX_COLS - 1 ? cells[rowParam + 1][colParam + 1] : null;
 
  return {
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell
  }
}

export const openMultipleCells = (cells: Cell[][], rowParam: number, colParam: number): Cell[][] => {
  let newCells = cells.slice();
  
  newCells[rowParam][colParam].state = CellState.Visible;
  
  const {
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell
   } = grabAllAdjacentCells(cells, rowParam, colParam);

  if (topLeftCell?.state === CellState.Open && topLeftCell.value !== CellValue.Bomb) {
    if (topLeftCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam - 1, colParam - 1);
    } else {
      newCells[rowParam - 1][colParam - 1].state = CellState.Visible;
    }
  } 
  
  if (topCell?.state === CellState.Open && topCell.value !== CellValue.Bomb) {
    if (topCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam - 1, colParam);
    } else {
      newCells[rowParam - 1][colParam].state = CellState.Visible;
    }
  }

  if (topRightCell?.state === CellState.Open && topRightCell.value !== CellValue.Bomb) {
    if (topRightCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam - 1, colParam + 1);
    } else {
      newCells[rowParam - 1][colParam + 1].state = CellState.Visible;
    }
  }

  if (leftCell?.state === CellState.Open && leftCell.value !== CellValue.Bomb) {
    if (leftCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam, colParam - 1);
    } else {
      newCells[rowParam][colParam - 1].state = CellState.Visible;
    }
  }

  if (rightCell?.state === CellState.Open && rightCell.value !== CellValue.Bomb) {
    if (rightCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam, colParam + 1);
    } else {
      newCells[rowParam][colParam + 1].state = CellState.Visible;
    }
  }

  if (bottomLeftCell?.state === CellState.Open && bottomLeftCell.value !== CellValue.Bomb) {
    if (bottomLeftCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam + 1, colParam - 1);
    } else {
      newCells[rowParam + 1][colParam - 1].state = CellState.Visible;
    }
  }

  if (bottomCell?.state === CellState.Open && bottomCell.value !== CellValue.Bomb) {
    if (bottomCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam + 1, colParam);
    } else {
      newCells[rowParam + 1][colParam].state = CellState.Visible;
    }
  }

  if (bottomRightCell?.state === CellState.Open && bottomRightCell.value !== CellValue.Bomb) {
    if (bottomRightCell.value === CellValue.None) {
      newCells = openMultipleCells(newCells, rowParam + 1, colParam + 1);
    } else {
      newCells[rowParam + 1][colParam + 1].state = CellState.Visible;
    }
  }

  return newCells;
}