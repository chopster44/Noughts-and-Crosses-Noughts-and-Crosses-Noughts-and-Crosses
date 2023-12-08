import GameBoardOuter from "./GameBoardOuter"

export default function App() {
  return (
    <main>
      <button className="x-confirm hidden">Confirm X</button>
      <h1 className="title">
        Noughts and Crosses<sup>3</sup>
      </h1>
      <GameBoardOuter />
      <button className="o-confirm hidden">Confirm O</button>
    </main>
  )
}
