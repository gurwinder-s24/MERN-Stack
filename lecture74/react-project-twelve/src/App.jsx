
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // 1. persisting values
  const [count, setCount] = useState(0);
  let val = 1; // do not persist its value across re-renders

  let x = useRef(1); // persist its value across re-renders
  // return an object with a property called current

  function handleIncrement() {
    val++;
    x.current++;
    console.log("value is:", val);
    console.log("x is:", x.current);

    console.log("initial value of count is:", count);
    setCount(count + 1);
    console.log("count is still:", count); 
    // ye wala count purana hi rahega jab tak render na ho jaye
  }

  // useEffect(() => {
  //   console.log("main phirse render ho gya hoon");
  //   console.log("updated value of count is:", count);
  // });




  //  2. accessing DOM elements directly
  let buttonRef = useRef();
  function changeColor() {
    console.log("changing color of first button");
    buttonRef.current.style.backgroundColor = "brown";
  }



  // 3. stopwatch example
  const [time, setTime] = useState(0);
  let timerId = useRef(null);

  function startTimer() { timerId.current = setInterval(() => {setTime(time => time + 1)}, 1000); }
  function stopTimer() { clearInterval(timerId.current); timerId.current = null; }
  function resetTimer() { stopTimer(); setTime(0); }

  return (
    <div>
      <div>Count: {count}</div><p></p>
      <button onClick={handleIncrement} ref={buttonRef}>
        Increment
      </button><p></p>

      <button onClick={changeColor}>
        Change Color of first button
      </button><p></p><p></p>

      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button><p></p>
      <button onClick={stopTimer}>Stop</button><p></p>
      <button onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default App


// diff bw useRef and useState
// usestate re-renders the component when its value changes
// useref does not re-render the component when its value changes

// useRef is used to
// 1. persist values across re-renders 
// 2. access DOM elements directly by using reference