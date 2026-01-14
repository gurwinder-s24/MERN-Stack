import {useState} from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      {/* passing children as props to Card component */}
      <div className="card-container">
        <Card name="First Card">
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p> Est vero aut iusto ipsam consequuntur quod fugiat nesciunt debitis dolor quis!</p>
        </Card>
        <Card name="Second Card" children= "Im a childern" >
        </Card>
        <Card name="Third Card" childer="children declared as prop">
          Children declared in Card tag 
          {/* will overwrite the children declared as prop */}
        </Card>
      </div>

      {/* passing function as props to Button component */}
      <div className="button-container">
        <Button incrementCount={handleClick} text="Click Me">
          <h1>{count}</h1>
        </Button>
      </div>
    </div>
  )
}

export default App
