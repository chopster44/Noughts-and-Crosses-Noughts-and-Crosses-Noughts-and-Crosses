import { useState } from "react"
import GameBoardInner from "./GameBoardInner"

export default function GameBoardMiddle({
  currentPlayerSymbol,
  setCurrentPlayerSymbol,
  currentGameBoardMiddle,
  setCurrentGameBoardMiddle,
  currentGameBoardInner,
  setCurrentGameBoardInner,
}) {
  const [gameBoardMiddle, setGameBoardMiddle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div className="game-board-middle">
      {gameBoardMiddle.map((board) => {
        return (
          <GameBoardInner
            currentPlayerSymbol={currentPlayerSymbol}
            setCurrentPlayerSymbol={setCurrentPlayerSymbol}
            currentGameBoardMiddle={currentGameBoardMiddle}
            setCurrentGameBoardMiddle={setCurrentGameBoardMiddle}
            currentGameBoardInner={currentGameBoardInner}
            setCurrentGameBoardInner={setCurrentGameBoardInner}
            key={board}
          />
        )
      })}
    </div>
  )
}
