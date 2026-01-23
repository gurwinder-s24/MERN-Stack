import { useRef } from 'react';
import { useState, useCallback, useEffect } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
      result += i;
    }
    // console.log(count);
    return result;
  }, [count]);
  
  useEffect(() => {
    if(previousFunction.current){
        if(previousFunction.current !== expensiveCalculation){
            console.log('Function got re-created');
            previousFunction.current = expensiveCalculation;
        }
        else{
            console.log('Function not re-created');
        }
    }
    else{
        previousFunction.current = expensiveCalculation;
    }

  });
  

  return (
    <div>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <h2>Expensive Calculation Result: {expensiveCalculation()}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </div>
  )
}

export default ExpensiveComponent

// diff bw useCallback and useMemo
// useMemo prevents re-execution of functions by memoizing their return values
// useCallback prevent re-creation of functions by memoizing them
