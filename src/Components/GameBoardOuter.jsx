import { useState } from "react"
import GameBoardMiddle from "./GameBoardMiddle"

export default function GameBoardOuter({ currentPlayerSymbol, setCurrentPlayerSymbol }) {
  const [gameBoardOuter, setGameBoardOuter] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div className="game-board-outer">
      {gameBoardOuter.map((board) => {
        return (
          <GameBoardMiddle
            currentPlayerSymbol={currentPlayerSymbol}
            setCurrentPlayerSymbol={setCurrentPlayerSymbol}
            key={board}
          />
        )
      })}
    </div>
  )
}
