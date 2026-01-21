import './App.css'
import { useSelector } from 'react-redux' // to read active state from the store
import { useDispatch } from 'react-redux' // to dispatch actions to the store
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  function handleIncrementClick() { dispatch(increment()) }
  function handleDecrementClick() { dispatch(decrement()) }
  function handleResetClick() { dispatch(reset()) }
  function handleIncrementByAmount(amount) { dispatch(incrementByAmount(amount)) }
  // sending amount as payload to the action

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <p></p>
      <button onClick={handleResetClick}>Reset</button>
      <br /><br />
      <input 
        type='Number' 
        value={amount} 
        placeholder='Enter amount' 
        onChange={(e) => setAmount(Number(e.target.value))} /><p></p>
        {/* using Number() so that the input value will not be treated as a string */}
      <button onClick={() => handleIncrementByAmount(amount)}>Add Amount</button>
    </div>
  )
}

export default App
