import { useState } from "react"
import GameBoardInner from "./GameBoardInner"

export default function GameBoardMiddle({ currentPlayerSymbol, setCurrentPlayerSymbol }) {
  const [gameBoardMiddle, setGameBoardMiddle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const xMovesOuter = []
  const oMovesOuter = []

  return (
    <div className="game-board-middle">
      {gameBoardMiddle.map((board) => {
        return (
          <GameBoardInner
            currentPlayerSymbol={currentPlayerSymbol}
            setCurrentPlayerSymbol={setCurrentPlayerSymbol}
            key={board}
          />
        )
      })}
    </div>
  )
}
