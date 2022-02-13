import { Board } from "./components/board/Board";
import './app.css'
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(1);
  const [isTie, setIsTie] = useState(false);

  const handlePlayerTurn = () => {
    const lastPlayer = player
    player === 1 ? setPlayer(2) : setPlayer(1);
    return lastPlayer;
  }

  return (
    <div className="app">
      {isTie && <h1>Empate</h1>}
      {isGameOver ? (<h1>Ha ganado el jugador {winner}</h1>) :
        (<>
          <h1>Turno del jugador {player}</h1>
          <Board handlePlayerTurn={handlePlayerTurn} setIsGameOver={setIsGameOver} setWinner={setWinner} setIsTie={setIsTie}/>
        </>
        )
      }

    </div>
  );
}

export default App;
