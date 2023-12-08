import { useState, createContext } from "react"
import GameBoardOuter from "./GameBoardOuter"
export const ConfirmContext = createContext()

export default function App() {
  const [confirmHidden, setConfirmHidden] = useState({ X: true, O: true })
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X")

  return (
    <ConfirmContext.Provider value={{ confirmHidden, setConfirmHidden }}>
      <main>
        <button className={`x-confirm ${confirmHidden.X && "hidden"}`}>Confirm X</button>
        <h1 className="title">
          Noughts and Crosses<sup>3</sup>
        </h1>
        <GameBoardOuter
          currentPlayerSymbol={currentPlayerSymbol}
          setCurrentPlayerSymbol={setCurrentPlayerSymbol}
        />
        <button className={`o-confirm ${confirmHidden.O && "hidden"}`}>Confirm O</button>
      </main>
    </ConfirmContext.Provider>
  )
}
