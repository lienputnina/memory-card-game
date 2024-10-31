import { FC } from "react";
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
  2. Map through them and return table with 4 rows each with 4 table data items
  2.1. Conditionally render: if not clicked, render ?, otherwise render picture (only for table cells)
  3. Create onClick function that flips the cards: changes class/image on click. Add CSS animation
  4. think about accessibility
  */

  return (
    <table className="game-deck">
      <tbody>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <tr key={rowIndex} className="game-row">
            {cells
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((cell, cellIndex) => (
                <td key={cellIndex} className="game-card">
                  <img
                    src={cell.image}
                    alt={`Image ${rowIndex * 4 + cellIndex + 1}`}
                    width={70}
                    height={70}
                  />
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
