import { useState, useContext, useEffect } from "react"
import { ConfirmContext } from "./App"

export default function GameBoardInner({
  currentPlayerSymbol,
  setCurrentPlayerSymbol,
  selectedTile,
  setSelectedTileAcrossBoards,
}) {
  const [gameBoardInner, setGameBoardInner] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [tileSymbol, setTileSymbol] = useState(Array(9).fill(""))
  const confirmContextData = useContext(ConfirmContext)

  useEffect(() => {
    // Clear the selected tile from the current board when it changes in another board
    setTileSymbol(Array(9).fill(""))
  }, [selectedTile])

  function selectTile(e) {
    const index = e.target.dataset.index
    setSelectedTileAcrossBoards(index)
    const newTileSymbol = Array(9).fill("")
    newTileSymbol[index] = currentPlayerSymbol
    setTileSymbol(newTileSymbol)
    confirmContextData.setConfirmHidden({
      X: currentPlayerSymbol === "X" ? false : true,
      O: currentPlayerSymbol === "O" ? false : true,
    })
  }
  return (
    <div className="game-board-inner">
      {gameBoardInner.map((board, index) => {
        return (
          <button
            className={`select-tile-btn ${selectedTile === index ? "selected" : ""}`}
            data-index={index}
            onClick={selectTile}
            key={board}>
            {tileSymbol[index]}
          </button>
        )
      })}
    </div>
  )
}
