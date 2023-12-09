import { useEffect, useState } from "react"

export default function GameBoardInner({
  currentPlayerSymbol,
  setCurrentPlayerSymbol,
  currentGameBoardMiddle,
  setCurrentGameBoardMiddle,
  currentGameBoardInner,
  setCurrentGameBoardInner,
  boardNotSelected,
}) {
  const [gameBoardInner, setGameBoardInner] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [tileSymbol, setTileSymbol] = useState(["", "", "", "", "", "", "", "", ""])
  const [confirmHidden, setConfirmHidden] = useState({ X: true, O: true })
  const [tempTileSymbol, setTempTileSymbol] = useState(Array(9).fill(null))
  const [xMoves, setXMoves] = useState([])
  const [oMoves, setOMoves] = useState([])
  const [btnDisabled, setBtnDisabled] = useState(Array(9).fill(false))

  useEffect(() => {
    ;(async () => {
      await sleep(100)
    })()
    checkWin()
    setBtnDisabled(tileSymbol.map((tile) => (tile !== "" ? true : false)))
  }, [xMoves, oMoves, tileSymbol])

  const winningCombos = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st col
    [1, 4, 7], // 2nd col
    [2, 5, 8], // 3rd col
    [0, 4, 8], // diag
    [2, 4, 6], // diag
  ]

  function confirmPlacement() {
    setConfirmHidden({ X: true, O: true })
    setTileSymbol(tempTileSymbol)
    setTempTileSymbol(Array(9).fill(null))
    setCurrentPlayerSymbol((prevSymbol) => (prevSymbol === "X" ? "O" : "X"))
    setXMoves(
      tileSymbol
        .map((tile, index) => (tile === "X" ? index : null))
        .filter((index) => index !== null)
    )
    setOMoves(
      tileSymbol
        .map((tile, index) => (tile === "O" ? index : null))
        .filter((index) => index !== null)
    )
  }

  function checkWin() {
    const xWin = winningCombos.some((combo) => {
      return combo.every((index) => xMoves.includes(index))
    })
    const oWin = winningCombos.some((combo) => {
      return combo.every((index) => oMoves.includes(index))
    })
    console.log({ xWin })
    console.log({ oWin })
  }

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
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
      </button>
      <button className={`o-confirm ${confirmHidden.O && "hidden"}`} onClick={confirmPlacement}>
        Confirm O
      </button>
      <div className="game-board-inner">
        {gameBoardInner.map((board, index) => {
          return (
            <button
              disabled={btnDisabled[index] || boardNotSelected}
              className="select-tile-btn"
              data-index={index}
              onClick={selectTile}
              key={board}>
              {tempTileSymbol[index] ?? tileSymbol[index]}
            </button>
          )
        })}
      </div>
    </>
  )
}
