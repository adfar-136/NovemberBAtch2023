import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
       const storedUser = JSON.parse(localStorage.getItem("user"))
       console.log("addfar")
       if(storedUser && storedUser.email===email && storedUser.password === password){
        localStorage.setItem('isAuthenticated',"true")
        navigate("/dashboard")
       }
       else{
        alert("Invalid Email or Password")
       }

       
    }
  return (
    <div>
        <h1>Login</h1>
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
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
