import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { initializeGrid } from "@/utils/initializeGrid";
import {addNumber} from '@/utils/addNumber'
import {moveLeft, moveDown, moveRight, moveUp} from '@/utils/move'
import {checkGameOver} from '@/utils/checkGameOver'
import { numberClasses } from "@/constants/color";
import { SIZE } from "@/constants/size";

const Game = () => {
  const [grid, setGrid] = useState(
    Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(0))
  );
  const [initialized, setInitialized] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGrid(initializeGrid());
    setInitialized(true);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (!initialized || gameOver) return;

      let newGrid = _.cloneDeep(grid);
      let moved = false;
      if (event.key === "ArrowLeft") {
        ({ grid: newGrid, moved } = moveLeft(newGrid));
      } else if (event.key === "ArrowRight") {
        ({ grid: newGrid, moved } = moveRight(newGrid));
      } else if (event.key === "ArrowUp") {
        ({ grid: newGrid, moved } = moveUp(newGrid));
      } else if (event.key === "ArrowDown") {
        ({ grid: newGrid, moved } = moveDown(newGrid));
      }
      if (moved) {
        addNumber(newGrid);
        setGrid(newGrid);
        if (checkGameOver(newGrid)) {
          setGameOver(true);
        }
      }
    },
    [grid, initialized, gameOver]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className=" bg-slate-100">
      {gameOver && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center gap-4 justify-center bg-gray-900 bg-opacity-75 z-50">

            <h1 className="text-4xl">Game Over!</h1>
            <button
              className="bg-blue-500 rounded-lg text-white px-4 py-2 mt-4"
              onClick={() => {
                setGrid(initializeGrid());
                setGameOver(false);
              }}
            >
                Restart
            </button>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`flex items-center text-lg justify-center w-24 h-24 rounded-md transition-all duration-200 ease-in-out transform ${
                cell ? numberClasses[cell] : "bg-gray-300"
              }`}
            >
              {cell ? cell : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Game;
