import { useEffect } from 'react'
import { useState } from 'react'
import LoggerComponent from './components/LoggerComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import ResizeComponent from './components/ResizeComponent.jsx'
import MultiEffectComponent from './components/MultiEffectComponent.jsx'
import './App.css'

function App() { 
  // const [count, setCount] = useState(0); 
  // function increment() { setCount(count + 1); }
  // const [total, setTotal] = useState(0);
  // function increment2() { setTotal(total + 2); }
  // const [val, setVal] = useState(0);
  // function increment3() { setVal(val + 3); }

  // useEffect hook
  // the recommended convention we have to follow is to write 
  // useEffect hook at the top of the component function

  // useEffect(() => {
  //   first                         //first: side-effect logic
  //   return () => {
  //     second                      //second: cleanup logic
  //   }
  // }, [third])                     // third: comma-separated dependency list


  // variation.1 (runs on every render or we can say on every repaint)
  // useEffect(() => { alert("I will run on each render"); })
  
  // variation.2 (runs only on the first render)
  // useEffect(() => { alert("I will run only on the first render"); }, [])

  // variation.3 (runs when the value of 'count' changes)
  // useEffect(() => { alert("I will run every time when count is updated"); } , [count])

  // variation.4 (multiple dependencies)
  // useEffect(() => { alert("I will run every time when count or total is updated"); } , [count, total])

  // variation.5 (use of cleanup function)
  // useEffect(() => {
  //   alert("Value is updated and about to be reflected in the UI");
  
  //   return () => {
  //     alert("Cleanup: Value is unmounted from the UI");
  //   }
  // }, [val])
  
  

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}
  
    </div>
    // <div>
    //   <button onClick={increment}>
    //     Count is: {count}
    //     <br />
    //   </button>
    //   <button onClick={increment2}>
    //     Total is: {total}
    //   </button>
    //   <button onClick={increment3}>
    //     Value is: {val}
    //   </button>
    // </div>
  )
}

export default App
