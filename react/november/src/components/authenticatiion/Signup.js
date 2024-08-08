import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(email && password){
            const user = {email,password};
            localStorage.setItem("user",JSON.stringify(user))
            navigate("/login")
        }
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
           <div>
                <label>Email:   </label>
                <input type="email" name="email" placeholder='Enter Email'
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
            <div>
                <label>Password :  </label>
                <input type="password" placeholder='Enter Password'
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
