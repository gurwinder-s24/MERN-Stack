import React from 'react'
import './Button.css'

const LoginBtn = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <button onClick={() => setIsLoggedIn(true)} className='button'>
        Login
    </button>
  )
}

export default LoginBtn
