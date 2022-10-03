import React from "react"
import Die from "./Components/Die"
import './App.css';
import { nanoid } from "nanoid"

function App() {

  const [dice, setDice] = React.useState(shuffleDice())

  function shuffleDice() {
    const arrDice = []

    for (let i = 0; i < 10; i++) {
      arrDice.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid()
      })
    }
    return arrDice;
  }

  function rollDice() {
    setDice(shuffleDice())
  }

  const randomizedDice = dice.map(die => (
    <Die key="die.id" value={die.value} />
  ))

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="content-box">
        <main className="main-box">
          <div className="dice-box">
            {randomizedDice}
          </div>
          <button className="dice-button" onClick={rollDice}>Roll!</button>
        </main>
      </div>
    </div>
  );
}

export default App;
