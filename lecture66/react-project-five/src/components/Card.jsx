import React from 'react'

const Card = ({ title,name, setName }) => {
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <h1>Name state variable ki value inside child component ({title}): {name}</h1>    
    </div>
  )
}

export default Card
