import {useState} from "react"
import GameTile from "./GameTile"

const {gameBoardOuter, setGameBoardOuter} = useState([])
setGameBoardOuter(prev => {
  return []
})
const gameBoardMiddle = [
  [], [], [],
  [], [], [],
  [], [], []
]

const gameBoardInner = [
  [], [], [],
  [], [], [],
  [], [], []
]

export default function GameBoard() {
  return gameBoardOuter.map(tile, index => {
    return <GameTile key={index} content={gameBoardMiddle} />
  })
}
