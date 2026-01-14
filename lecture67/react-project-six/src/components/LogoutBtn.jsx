import React from 'react'
import './Button.css'

const LogoutBtn = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <button onClick={() => setIsLoggedIn(false)} className='button'>
        Logout
    </button>
  )
}

export default LogoutBtn
