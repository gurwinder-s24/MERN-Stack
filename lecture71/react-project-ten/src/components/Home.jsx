import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
