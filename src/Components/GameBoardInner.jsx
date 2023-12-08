import { set } from "mongoose"
import { useState } from "react"

export default function GameBoardInner({ currentPlayerSymbol, setCurrentPlayerSymbol }) {
  const [gameBoardInner, setGameBoardInner] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [tileSymbol, setTileSymbol] = useState(["", "", "", "", "", "", "", "", ""])
  const [confirmHidden, setConfirmHidden] = useState({ X: true, O: true })
  const [tempTileSymbol, setTempTileSymbol] = useState(Array(9).fill(null))

  function confirmPlacement() {
    setConfirmHidden({ X: true, O: true })
    setTileSymbol(tempTileSymbol)
    setTempTileSymbol(Array(9).fill(null))
    setCurrentPlayerSymbol(currentPlayerSymbol === "X" ? "O" : "X")
  }

  function selectTile(e) {
    const index = e.target.dataset.index
    const tileArray = [...tileSymbol]
    tileArray[index] = currentPlayerSymbol
    setTempTileSymbol(tileArray)
    setConfirmHidden({
      X: currentPlayerSymbol === "X" ? false : true,
      O: currentPlayerSymbol === "O" ? false : true,
    })
  }
  return (
    <>
      <button className={`x-confirm ${confirmHidden.X && "hidden"}`} onClick={confirmPlacement}>
        Confirm X
      </button>{" "}
      <button className={`o-confirm ${confirmHidden.O && "hidden"}`} onClick={confirmPlacement}>
        Confirm O
      </button>
      <div className="game-board-inner">
        {gameBoardInner.map((board, index) => {
          return (
            <button className="select-tile-btn" data-index={index} onClick={selectTile} key={board}>
              {tempTileSymbol[index] ?? tileSymbol[index]}
            </button>
          )
        })}
      </div>
    </>
  )
}
