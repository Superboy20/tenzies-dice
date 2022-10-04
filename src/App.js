import React from "react"
import Die from "./Components/Die"
import './App.css';
import { nanoid } from "nanoid"

function App() {

  const [dice, setDice] = React.useState(shuffleDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const heldDie = dice.every(die => die.isHeld)
    const diceVal = dice[0].value
    const allSameVal = dice.every(die => die.value === diceVal)
    if (heldDie && allSameVal) {
      setTenzies(true)

    }
  }, [dice])

  function generateDice() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function shuffleDice() {
    const arrDice = []

    for (let i = 0; i < 10; i++) {
      arrDice.push(generateDice())
    }
    return arrDice;
  }


  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          generateDice()
      }))
    } else {
      setTenzies(false)
      setDice(shuffleDice())
    }
  }

  function holdDice(id) {
    // Gives access to the old dice/array
    // Map looks at each die object, makes sure if the die has the same id
    // that was passed in the function
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  const randomizedDiceElements = dice.map(die => (
    <Die key="die.id" value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ))

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="content-box">
        <main className="main-box">
          <h1 className="title">Tenzies!</h1>
          <p className="instructions">{tenzies ? "You won!" : "Roll all of the dice until they are the same, click each die to hold that value in between rolls!"}</p>
          <div className="dice-box">
            {randomizedDiceElements}
          </div>
          <button
            className="dice-button"
            onClick={rollDice}>
            {tenzies ? "New Game" : "Roll!"}
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
