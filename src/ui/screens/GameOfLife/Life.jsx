import React, { useState } from "react";
import "./Life.css";

const ROWS = 10;
const COLS = 10;

export function GameOfLife() {
  const [grid, setGrid] = useState(() => {
    const initialGrid = [];
    for (let i = 0; i < ROWS; i++) {
      const row = [];
      for (let j = 0; j < COLS; j++) {
        row.push(false);
      }
      initialGrid.push(row);
    }
    return initialGrid;
  });

  const countNeighbors = (grid, row, col) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const newRow = row + i;
        const newCol = col + j;

        if (
          newRow >= 0 &&
          newRow < ROWS &&
          newCol >= 0 &&
          newCol < COLS &&
          grid[newRow][newCol]
        ) {
          count++;
        }
      }
    }
    return count;
  };

  const toggleCell = (row, col) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  const handleNextGeneration = () => {
    setGrid((prevGrid) => {
      const newGrid = [];
      for (let i = 0; i < ROWS; i++) {
        const newRow = [];
        for (let j = 0; j < COLS; j++) {
          const neighbors = countNeighbors(prevGrid, i, j);
          if (prevGrid[i][j] && (neighbors < 2 || neighbors > 3)) {
            newRow.push(false);
          } else if (!prevGrid[i][j] && neighbors === 3) {
            newRow.push(true);
          } else {
            newRow.push(prevGrid[i][j]);
          }
        }
        newGrid.push(newRow);
      }
      return newGrid;
    });
  };

  return (
    <div className="game-container">
      <h1>Exercicio 2</h1>
      <h2>Jogo da Vida</h2>
      <div className="board">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell ? "alive" : ""}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            ></div>
          ))
        )}
      </div>
      <div className="buttons">
        <button onClick={handleNextGeneration}>Próxima Geração</button>
      </div>
    </div>
  );
}
