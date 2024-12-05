import { FC } from "react";
import "./App.scss";
import { GameDeck } from "./components/GameDeck/GameDeck";
import { cellData } from "./components/GameDeck/CellData";

const App: FC = () => {
  return (
    <main>
      <div className="title-area">
        <h1 className="game-title">Memory card game</h1>
        <p className="game-description">
          This is a game where you need to find matching pairs. Click on a card
          to see its image. Click on another one to see, if it matches. The game
          ends, once you've found all pairs.
        </p>
      </div>
      <GameDeck cells={cellData} />
    </main>
  );
};

export default App;
