import { SIZE } from "@/constants/size";

export const checkGameOver = (grid) => {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j] === 0) return false;
    }
  }

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE - 1; j++) {
      if (grid[i][j] === grid[i][j + 1]) return false;
    }
  }

  for (let j = 0; j < SIZE; j++) {
    for (let i = 0; i < SIZE - 1; i++) {
      if (grid[i][j] === grid[i + 1][j]) return false;
    }
  }

  return true;
};
