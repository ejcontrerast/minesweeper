import React from 'react';

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
};
export enum Face {
  smile = '😊',
  oh = '😲',
  lost = '😭',
  win = '😎'
}
export const [time, setTime] = React.useState<number>(0);

export function openMultipleCells(cells: Cell[][], rowParam: number, colParam: number): Cell[][] {
  throw new Error('Function not implemented.');
}
export function showAllBombs(): Cell[][] {
  throw new Error('Function not implemented.');
}
