import React from "react"
import Die from "./Components/Die"
import './App.css';

function App() {

  const [dice, setDice] = React.useState(ShuffleDice())

  function ShuffleDice() {
    const arrDice = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6 + 1));
    return arrDice;
  }

  console.log(ShuffleDice())

  const randomizedDice = dice.map(die => <Die value={die} />)

  return (
    <div className='example'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="content-box">
        <main className="main-box">
          <div className="dice-box">
            {randomizedDice}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
