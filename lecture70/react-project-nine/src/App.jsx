import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'


// step 1: Create a Context
const UserContext = createContext()
const ThemeContext = createContext()
// step 2: wrap all the components/child
// (to which you want to give access) inside a Provider
// step 3: provide a value to the Provider
// step 4: Consume the context value in any child component

function App() {
  const [user, setUser] = useState({name: 'Guest', age : 25});
  const [theme, setTheme] = useState('light');
  return (
    <div>
      {/* <ChildA /> wrap inside provider*/} 

      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}

      {/* multiple context providers*/}

      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <div id='divAPP' style={{
            backgroundColor: theme === 'light' ? 'beige' : 'black',
            color: theme === 'light' ? 'black' : 'white'
          }}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

export default App
export { UserContext }
export { ThemeContext }
