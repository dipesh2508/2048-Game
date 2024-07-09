import { SIZE } from "@/constants/size";
import { addNumber } from "@/utils/addNumber";

export const initializeGrid = () => {
  const grid = Array(SIZE)
    .fill(null)
    .map(() => Array(SIZE).fill(0));
  addNumber(grid);
  addNumber(grid);
  return grid;
};
