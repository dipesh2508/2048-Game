import { SIZE } from "@/constants/size";

export const rotateGrid = (grid) => {
  const newGrid = Array(SIZE)
    .fill(null)
    .map(() => Array(SIZE).fill(0));
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      newGrid[j][SIZE - i - 1] = grid[i][j];
    }
  }
  return newGrid;
};
