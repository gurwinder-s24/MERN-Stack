import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // method 3: logical operators
  return (
    <div>
      {isLoggedIn && <LogoutBtn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      {!isLoggedIn && <LoginBtn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )

  // method 2: ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  // method 1: if-else or early return
  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <LogoutBtn />
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     <LoginBtn />
  //   </div>
  // )
}

export default App
