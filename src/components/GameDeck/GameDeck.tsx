import { FC, useEffect, useRef, useState } from "react";
import "./GameDeck.scss";
import { type CellData } from "./CellData";

interface GameDeckProps {
  cells: CellData[];
}

/*
todo
Desktop layout
Host on Netlify/Vercel
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
      }, 500);
    }
  }, [activeCellOne, activeCellTwo]);

  useEffect(() => {
    if (flippedCells.length === cells.length) {
      setGameOver(true);
      dialogRef.current?.showModal();
    }
  }, [flippedCells.length]);

  const shuffleCellsArray = (cells: CellData[]): void => {
    cells.sort(() => Math.random() - 0.5);
  };

  const clearDeck = (): void => {
    dialogRef.current?.close();
    setFlippedCells([]);
    setActiveCellOne(null);
    setActiveCellTwo(null);

    shuffleCellsArray(cells);
  };

  return (
    <>
      <p className="move-count">
        <strong>Moves made:</strong> {moves}
      </p>
      <table className="game-deck">
        <tbody>
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <tr key={rowIndex} className="game-row">
              {cells.slice(rowIndex * 4, rowIndex * 4 + 4).map((cell) => {
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
                    key={`${rowIndex}-${cell.id}`}
                    className="game-card"
                    onClick={handleCellClick}
                  >
                    <img
                      src={cell.image}
                      alt={`Image ${cell.type} ${cell.id}`}
                      width={70}
                      height={70}
                      className={showCell ? "image-visible" : "image-hidden"}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <dialog ref={dialogRef}>
        <div className="win-dialog">
          <p>You win in {moves} moves 🎉</p>
          <button className="dialog-button" onClick={clearDeck}>
            Retry
          </button>
        </div>
      </dialog>
    </>
  );
};
