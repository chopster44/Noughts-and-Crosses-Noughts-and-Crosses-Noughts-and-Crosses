import { useState } from "react"
import GameBoardOuter from "./GameBoardOuter"

export default function App() {
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X")

  return (
    <main>
      <h1 className="title">
        Noughts and Crosses<sup>3</sup>
      </h1>
      <GameBoardOuter
        currentPlayerSymbol={currentPlayerSymbol}
        setCurrentPlayerSymbol={setCurrentPlayerSymbol}
      />
    </main>
  )
}
