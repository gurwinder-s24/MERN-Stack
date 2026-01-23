// useMemo Hook used to memoize/cache values in react functional components
// optimize performance by preventing unnecessary expensive recalculations of values
import './App.css'
import { useState, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);

  // Expensive calculation function
  function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy computation
    return num * 2;
  }


  const [input, setInput] = useState(0);
  // let doubleValue = expensiveCalculation(input);
  let doubleValue = useMemo(() => expensiveCalculation(input), [input]);
  // using useMemo to cut down the delay
  // two parameters: expensive function and dependency array
  // only memoizes the last value when the dependencies change not all previous values

  return (
    <div>
      useMemo Hook

      <h1>Count: {count}</h1>

      <button onClick={() => { setCount(count+1) }}>
        Increment
      </button><p></p>

      <input 
        type="number" 
        placeholder='Enter Number'
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      /> <p></p>

      <div>Double Value: {doubleValue}</div><p></p>
    </div>
  )
}

export default App
