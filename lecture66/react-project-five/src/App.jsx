import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  // create state
  // manage state
  // change state
  const [name, setName] = useState('');
  // sbhi children me state sync

  return (
    <div>
      <Card title='Card 1' name={name} setName={setName}></Card>
      <Card title='Card 2' name={name} setName={setName}></Card>
      <p>Name state variable ki value inside parent component (App): {name}</p>
    </div>
  )
}

export default App
