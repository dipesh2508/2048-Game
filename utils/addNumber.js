import { SIZE } from "@/constants/size";
const getRandomInt = (max) => Math.floor(Math.random() * max);

export const addNumber = (grid) => {
  let options = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j] === 0) {
        options.push({ x: i, y: j });
      }
    }
  }
  if (options.length > 0) {
    const spot = options[getRandomInt(options.length)];
    grid[spot.x][spot.y] = getRandomInt(10) < 9 ? 2 : 4;
  }
  return grid;
};
