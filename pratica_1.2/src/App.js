import { useEffect, useState } from "react";
import Button from "./Button";
import './App.css';

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
        <div>
          <h2>Calculadora</h2>
        </div>

        <div>
          <div>
            <label htmlFor="num1">Num1: </label>
            <input value={num1} id='num1' type="number" onChange={handleNum1} />
          </div>
          <div>
            <label htmlFor="num2">Num2: </label>
            <input value={num2} id='num2' type="number" onChange={handleNum2} />
          </div>
        </div>
        <div>
          <Button num1={num1} num2={num2} />
        </div>

      </header>
    </div>
  );
}

export default App;
