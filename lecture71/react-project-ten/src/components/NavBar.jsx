import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <ul>
        {/* dont use anchor tag because it reloads the whole page so we use link/navlink tags */}
        
        {/* using navlink to to use active class that is provided with navlink */}
        {/* is active is a by default boolean flag in navlink component */}
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}>Dashboard</NavLink>
        </li>

        {/* <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default NavBar
