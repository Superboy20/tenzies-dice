import React from "react"
import Die from "./Components/Die"
import './App.css';
import { nanoid } from "nanoid"

function App() {

  const [dice, setDice] = React.useState(shuffleDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {

    // WIN CONDITION:

    // heldDie returns true if all dice are held.
    // diceVal takes and holds the first die's value.
    // allSameVal checks the rest of the dice and see if they're equal with
    // the first value.
    // If statement checks whether or not all of the dice are held
    // AND if they have the same value, if all is true, the game is won/over.
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
    // Pushes new unique dice into an array
    // using the generateDice method
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
      setCounter(counter + 1)

    } else {
      // If tenzies is true and the game was won, set it to false
      // generate new dice to start new game
      setTenzies(false)
      setDice(shuffleDice())
      setCounter(0)
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
          <p className="rolls-performed"> Rolls: {counter} </p>
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
