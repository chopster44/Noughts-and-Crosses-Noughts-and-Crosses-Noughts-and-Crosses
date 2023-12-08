import { useState } from "react"
import GameBoardMiddle from "./GameBoardMiddle"

export default function GameBoardOuter() {
  const [gameBoardOuter, setGameBoardOuter] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const currentPlayerSymbol = useState("X")

  return (
    <div className="game-board-outer">
      {gameBoardOuter.map((board) => {
        return <GameBoardMiddle currentPlayerSymbol={currentPlayerSymbol} key={board} />
      })}
    </div>
  )
}
