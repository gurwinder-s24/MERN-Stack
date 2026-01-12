import React from 'react'
import './UserCard.css'
// import IMAGE from '../assets/image.webp'

const UserCard = (props) => {
  return (
    // class is a reserved keyword in JS
    <div className='user-container' style={props.style}>
      <p id='title'>{props.name}</p>
      {/* <img id='user-img' src={IMAGE} alt="img" /> */}
      <img id='user-img' src={props.image} alt="img" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
// Will only be able to use this somewhere
// if we export it from here 
// and import it where we want to use it.
