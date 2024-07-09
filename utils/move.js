import { SIZE } from "@/constants/size";
import { rotateGrid } from "@/utils/rotateGrid";

export const moveLeft = (grid) => {
  let moved = false;
  for (let i = 0; i < SIZE; i++) {
    let row = grid[i];
    let newRow = row.filter((val) => val);
    while (newRow.length < SIZE) newRow.push(0);
    for (let j = 0; j < SIZE - 1; j++) {
      if (newRow[j] !== 0 && newRow[j] === newRow[j + 1]) {
        newRow[j] *= 2;
        newRow[j + 1] = 0;
        moved = true;
      }
    }
    newRow = newRow.filter((val) => val);
    while (newRow.length < SIZE) newRow.push(0);
    if (JSON.stringify(grid[i]) !== JSON.stringify(newRow)) {
      moved = true;
    }
    grid[i] = newRow;
  }
  return { grid, moved };
};

export const moveRight = (grid) => {
  grid = rotateGrid(rotateGrid(grid));
  const result = moveLeft(grid);
  result.grid = rotateGrid(rotateGrid(result.grid));
  return result;
};

export const moveUp = (grid) => {
  grid = rotateGrid(rotateGrid(rotateGrid(grid)));
  const result = moveLeft(grid);
  result.grid = rotateGrid(result.grid);
  return result;
};

export const moveDown = (grid) => {
  grid = rotateGrid(grid);
  const result = moveLeft(grid);
  result.grid = rotateGrid(rotateGrid(rotateGrid(result.grid)));
  return result;
};
