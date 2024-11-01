import { FC, useState } from "react";
import "./GameDeck.scss";

interface Cell {
  image: string;
}

interface GameDeckProps {
  cells: Cell[];
}

export const GameDeck: FC<GameDeckProps> = ({ cells }) => {
  // todo: add state handling logic
  /*
  3.1.1. Card flips again, if no pair is found => add logic to find matching pairs
  3.1 Add CSS animation
  3.2. Shuffle the cards after victory
  4. think about accessibility
  */

  const [activeCells, setActiveCells] = useState<number[]>([]);

  const flipCard = (index: number): void => {
    setActiveCells((prevActiveCells) => {
      // if the index of the current cell is already "registered" (is it "active"?)
      if (prevActiveCells.includes(index)) {
        return prevActiveCells;
      }

      // If the array if full
      if (prevActiveCells.length === 2) {
        return [prevActiveCells[1], index]; // Replace the oldest active cell
      }

      // Otherwise, add the new cell to the active cells
      return [...prevActiveCells, index];
    });
  };

  return (
    <table className="game-deck">
      <tbody>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <tr key={rowIndex} className="game-row">
            {cells
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((cell, cellIndex) => {
                // Calculating an index to represent each cell's position in a single number
                const cellIndexInGrid = rowIndex * 4 + cellIndex;
                // Determining, if the current cell (at cellIndexInGrid) is active.
                const isActive = activeCells.includes(cellIndexInGrid);
                return (
                  <td
                    key={`${rowIndex}-${cellIndex}`} // String key for React rendering
                    className="game-card"
                    onClick={() => flipCard(cellIndexInGrid)}
                  >
                    {isActive ? (
                      <img
                        src={cell.image}
                        alt={`Image ${cellIndexInGrid + 1}`}
                        width={70}
                        height={70}
                      />
                    ) : (
                      " "
                    )}
                  </td>
                );
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
