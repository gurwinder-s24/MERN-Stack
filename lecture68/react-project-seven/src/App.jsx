import './App.css'
// event handling in react

function App() {

  function handleClick() {
    alert('Button Clicked!');
  }
  function handleMouseOver() {
    alert('Mouse Over Event Triggered!');
  }
  function handleChange(e) {
    console.log('Input Changed to:', e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault(); 
    // to prevent page reload and write custom behavior
    // below instead of default behavior of form submission
    alert('Form Submitted!');
  }

  return (
    <div className="app">
      <p onMouseOver={handleMouseOver}>
        Event Handling in React
      </p>

      <button onClick={handleClick}>
        {/* <button onClick={() => alert('Button Clicked!')}> */}
        Click Me
      </button>

      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='Enter your name' />
        {/* onChange={handleChange} IS EQUIVALENT TO onChange={(e) => handleChange(e)} */}

        <button type='submit'>
          Submit
        </button>
      </form>

      {/* immediate invocation */}
      {/* <button onClick={alert("Button click hua hai")}> */}
      {/* dont do this mistake this will cause immediate invocation 
          as well as no event handling on click occurs  
      */}
      <button onClick={() => alert("Button click hua hai")}>
        Normal Button
      </button>
    </div>
  )
}

export default App
