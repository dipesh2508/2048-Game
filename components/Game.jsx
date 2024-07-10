import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { initializeGrid } from "@/utils/initializeGrid";
import { addNumber } from "@/utils/addNumber";
import { moveLeft, moveDown, moveRight, moveUp } from "@/utils/move";
import { checkGameOver } from "@/utils/checkGameOver";
import { checkGameWon } from "@/utils/checkGameWon";
import { SIZE } from "@/constants/size";

const numberClasses = {
  2: "bg-cyan-300 text-cyan-900",
  4: "bg-emerald-300 text-emerald-800",
  8: "bg-teal-500 text-teal-900",
  16: "bg-lime-500 text-lime-100",
  32: "bg-indigo-600 text-indigo-100",
  64: "bg-fuchsia-700 text-fuchsia-100",
  128: "bg-pink-600 text-pink-100",
  256: "bg-rose-600 text-rose-100",
  512: "bg-amber-600 text-amber-100",
  1024: "bg-blue-800 text-blue-100",
  2048: "bg-yellow-500 text-yellow-900",
};

const Game = () => {
  const [grid, setGrid] = useState(
    Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(0))
  );
  const [initialized, setInitialized] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

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
        if (checkGameWon(newGrid)) {
          setGameWon(true);
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
      {gameWon && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center gap-4 justify-center bg-gray-900 bg-opacity-75 z-50">
          <h1 className="text-4xl">You Won!</h1>
          <button
            className="bg-blue-500 rounded-lg text-white px-4 py-2 mt-4"
            onClick={() => {
              setGrid(initializeGrid());
              setGameWon(false);
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
