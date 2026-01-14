import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button onClick={props.incrementCount} className= "button">
        {props.text}
        {props.children}
    </button>
  )
}

export default Button
