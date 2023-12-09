import { useState } from "react"
import GameBoardMiddle from "./GameBoardMiddle"

export default function GameBoardOuter({ currentPlayerSymbol, setCurrentPlayerSymbol }) {
  const [gameBoardOuter, setGameBoardOuter] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [currentGameBoardMiddle, setCurrentGameBoardMiddle] = useState(3)
  const [currentGameBoardInner, setCurrentGameBoardInner] = useState(3)

  return (
    <div className="game-board-outer">
      {gameBoardOuter.map((board) => {
        return (
          <GameBoardMiddle
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
