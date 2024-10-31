import { FC } from "react";
import "./App.scss";
import { GameDeck } from "./components/GameDeck/GameDeck";
import ExtendedCellData from "./components/GameDeck/CellData";

const App: FC = () => {
  return (
    <main>
      <div className="title-area">
        <h1 className="game-title">Memory card game</h1>
        <p className="game-description">Some text</p>
      </div>
      <GameDeck cells={ExtendedCellData} />
    </main>
  );
};

export default App;
