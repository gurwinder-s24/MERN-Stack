// useCallback Hook used to memoize/cache functions in react functional components
// optimize performance by preventing unnecessary re-creations of functions
import './App.css'
import { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);

  function handleClick(){
    setCount(count+1);
  }

  const dummyFunction = useCallback(() => {
    setValue(value ? false : true);
  }, [value]);

  return (
    // <div>
    //   useCallback Hook

    //   <h1>Count: {count}</h1>

    //   <button onClick={handleClick}>
    //     Increment
    //   </button><p></p>

    //   <div>
    //     <ChildComponent
    //       buttonName="Toggle" 
    //       value={value} 
    //       dummyFunction={dummyFunction}
    //     />
    //   </div>
    //   {/* re-rendering even if we are clicking increment button
    //       and not changing any props of ChildComponent */}

    // </div>
    <div>
      <ExpensiveComponent />
    </div>
  )
}

export default App

// useCallback is used to

// 1. prevent unnecessary re-renders of child components
// steps:
// a) wrap the child component with React.memo() to memoize it
//    isse child component re-render tabhi hoga jab props change honge otherwise nahi hoga

// b) limitation of above step is if we are sending functions as props to child component
//    then ye re-render se nhi bcha paega kyuki har render pe function naya create hota hai
//    and that means props of child component got changed

// soluton for above limitation is the useCallback hook
// c) wrap the function with useCallback() hook
//    now this function got freezed that means its reference will remain same(reference got memoized)
//    across re-renders unless dependencies change which here we provided as empty 



// 2. pevent re-execution of expensive calculations
// steps:
// a) wrap the expensive calculation function with useCallback() hook
// b) provide dependencies array so that function is re-created only when dependencies change