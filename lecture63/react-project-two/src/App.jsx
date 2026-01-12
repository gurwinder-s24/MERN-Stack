import './App.css'
import UserCard from './components/UserCard.jsx'
import IMAGE1 from './assets/image.webp'
import IMAGE2 from './assets/image.webp'
import IMAGE3 from './assets/image.webp'

function App() {

  return (
    <div className='container'>
      <UserCard name='User 1' desc='Description for User 1' image={IMAGE1} style={{"borderRadius": "10px"}} />
      <UserCard name='User 2' desc='Description for User 2' image={IMAGE2} style={{"borderRadius": "10px"}} />
      <UserCard name='User 3' desc='Description for User 3' image={IMAGE3} style={{"borderRadius": "10px"}} />
    </div>
  )
}

export default App
