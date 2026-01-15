import {useState, useEffect} from 'react'

const MultiEffectComponent = () => {
  const [theValue, setTheValue] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => { console.log("The value changed: " + theValue); },[theValue]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("tick tick");
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
  
    return () => { console.log("booom!"); clearInterval(intervalId); }
  }, [])
  

  return (
    <div>
      <h1>the Value: {theValue}</h1>
      <button onClick={() => setTheValue(theValue + 1)}>Increment the value</button>
      <h2>Timer: {timer}</h2>
    </div>
  )
}

export default MultiEffectComponent
