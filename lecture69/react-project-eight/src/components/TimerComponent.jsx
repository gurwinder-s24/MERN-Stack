import {useState, useEffect} from 'react'

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        console.log('setInterval executed');
        setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
        console.log('time to stop')
        clearInterval(interval)
    };
  }, []); // Runs only on first render

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
