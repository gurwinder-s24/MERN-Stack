// import React from 'react'
import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    // const [count, setCount] = React.useState(0);
    const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p id='para'>
        You have clicked the button {count} times.
      </p>
      <button id='btn' onClick={()=> {setCount(count+1)}} >Counter++</button>
    </div>
  )
}

export default Counter
