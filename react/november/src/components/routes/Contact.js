import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Contact</h1>
       <button onClick={()=>navigate("/about")}>About</button>
        <mark>Hello welcome</mark>
        <h2>Adfar rasheed</h2>
        <Outlet/>
    </div>
  )
}
