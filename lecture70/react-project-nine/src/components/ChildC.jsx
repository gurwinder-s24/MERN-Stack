import {useContext} from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
  const user = useContext(UserContext)
  const {theme, setTheme} = useContext(ThemeContext)
    function toggleTheme() {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div>
      Hello from Child C <br />
      {user.name} - {user.age}
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
