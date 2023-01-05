import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Buttons from './buttons';

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleNum1 = (e) => {
    setNum1(parseFloat(e.target.value))
  }
  const handleNum2 = (e) => {
    setNum2(parseFloat(e.target.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <label htmlFor="num1">Num1:</label>
            <input id="num1" type="text" onChange={handleNum1} />
          </div>
          <div>
            <label htmlFor="num2">Num2:</label>
            <input id="num2" type="text" onChange={handleNum2} />
          </div>
        </div>
        <Buttons num1={num1} num2={num2} />
      </header>
    </div>
  );
}

export default App;
