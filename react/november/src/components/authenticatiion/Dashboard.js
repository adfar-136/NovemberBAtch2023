import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate()
    function handleLogout(){
         localStorage.removeItem("isAuthenticated");
         navigate("/login")
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
