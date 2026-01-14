import React from 'react'
import './Card.css'

const Card = (props) => {
  // const Card = ({children}) => {
  // destructuring props to get children directly
  return (
    <div className="card">
      {props.name} <br />
      {props.children}
      {/* {children} */}
    </div>
  )
}

export default Card
