import { set } from "mongoose"
import { useState } from "react"

export default function GameBoardInner({ currentPlayerSymbol }) {
  const [gameBoardInner, setGameBoardInner] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [tileSymbol, setTileSymbol] = useState(["", "", "", "", "", "", "", "", ""])

  function selectTile(e) {
    const tileArray = ["", "", "", "", "", "", "", "", ""]
    tileArray[e.target.dataset.index] = currentPlayerSymbol
    console.log(tileArray)
    setTileSymbol(tileArray)
  }
  return (
    <div className="game-board-inner">
      {gameBoardInner.map((board, index) => {
        return (
          <button className="select-tile-btn" data-index={index} onClick={selectTile} key={board}>
            {tileSymbol[index]}
          </button>
        )
      })}
    </div>
  )
}
