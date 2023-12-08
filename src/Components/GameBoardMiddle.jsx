import { useState } from "react"
import GameBoardInner from "./GameBoardInner"

export default function GameBoardMiddle({ currentPlayerSymbol }) {
  const [gameBoardMiddle, setGameBoardMiddle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div className="game-board-middle">
      {gameBoardMiddle.map((board) => {
        return <GameBoardInner currentPlayerSymbol={currentPlayerSymbol} key={board} />
      })}
    </div>
  )
}
