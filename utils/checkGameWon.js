import { SIZE } from "@/constants/size";

export const checkGameWon = (grid) => {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j] === 2048) return true;
    }
  }
  return false;
};
