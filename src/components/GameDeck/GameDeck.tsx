import { FC, useEffect, useRef, useState } from "react";
import "./GameDeck.scss";
import { type CellData } from "./CellData";

interface GameDeckProps {
  cells: CellData[];
}

/*
todo
1. Style the modal
2. Add "Start again" button + clear the deck 
3. Fix the "image wobble"
4. Add "flip" animation
5. Add shuffle option 
6. Host on Netlify/Vercel
*/

/*
1. Created two new states - activeCellOne and activeCellTwo
*/
export const GameDeck: FC<GameDeckProps> = ({ cells }) => {
  const [flippedCells, setFlippedCells] = useState<CellData[]>([]);
  const [activeCellOne, setActiveCellOne] = useState<CellData | null>(null);
  const [activeCellTwo, setActiveCellTwo] = useState<CellData | null>(null);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (activeCellOne && activeCellTwo) {
      if (activeCellOne.type === activeCellTwo.type) {
        setFlippedCells((existingValues) => {
          return [...existingValues, activeCellOne, activeCellTwo];
        });
      }

      setTimeout(() => {
        setActiveCellOne(null);
        setActiveCellTwo(null);
      }, 200);
    }
  }, [activeCellOne, activeCellTwo]);

  useEffect(() => {
    if (flippedCells.length === cells.length) {
      setGameOver(true);
      dialogRef.current?.showModal();
    }
  }, [flippedCells.length]);

  return (
    <>
      <p>{moves}</p>
      <table className="game-deck">
        <tbody>
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <tr key={rowIndex} className="game-row">
              {cells
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((cell, cellIndex) => {
                  const showCell =
                    flippedCells.includes(cell) ||
                    cell === activeCellOne ||
                    cell === activeCellTwo;

                  const handleCellClick = () => {
                    setMoves(moves + 1);

                    if (!activeCellOne) {
                      setActiveCellOne(cell);
                    } else if (!activeCellTwo) {
                      setActiveCellTwo(cell);
                    }
                  };

                  return (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="game-card"
                      onClick={handleCellClick}
                    >
                      {showCell ? (
                        <img
                          src={cell.image}
                          alt={`Image ${cell.type} ${cell.id}`}
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
      <dialog ref={dialogRef}>
        <p>You win in {moves} moves 🎉</p>
        <button>Retry</button>
      </dialog>
    </>
  );
};
