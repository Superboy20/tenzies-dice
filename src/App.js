import './App.css';
import Die from "./Components/Die"

function App() {
  return (
    <div className='example'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="content-box">
        <main className="main-box">
          <div className="dice-box">
            <Die value="1" />
            <Die value="2" />
            <Die value="3" />
            <Die value="4" />
            <Die value="5" />
            <Die value="6" />
            <Die value="1" />
            <Die value="2" />
            <Die value="3" />
            <Die value="4" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
