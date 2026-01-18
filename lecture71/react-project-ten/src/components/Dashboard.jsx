import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div> 
      <h1>Dashboard Page</h1>
      {/* add this keyword where we want to render nested routes */}
      <Outlet />
    </div>
  )
}

export default Dashboard