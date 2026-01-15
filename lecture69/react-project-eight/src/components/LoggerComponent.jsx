import {useState, useEffect, use} from "react";

const LoggerComponent = () => {
  const [myCount, setCount] = useState(0);
  useEffect(() => {
    console.log('Component rendered or myCount changed:', myCount);
  }); // No dependency array, runs on every render

  return (
    <div>
      <h1>
        My Count is: {myCount}
      </h1>
      <button onClick={() => setCount(myCount + 1)}>
        Increment
      </button>
    </div>
  )
}

export default LoggerComponent
