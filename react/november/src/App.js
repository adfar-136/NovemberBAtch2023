import React, { useState } from 'react'

export default function App() {
  const [email,setEmail] = useState("")
  const [password,setPasswor] = useState("")
  const [data,setData] = useState("")
  function handleSubmit(e){
       e.preventDefault()
       const user ={email,password}
       localStorage.setItem("user",JSON.stringify(user))
      // //  localStorage.setItem("user",JSON.stringify({email,password}))
      //  localStorage.setItem("email",email);
      //  localStorage.setItem("password",password)
  }
  function getData(){
    const data = JSON.parse(localStorage.getItem("user"));
    setData(data)
  }
  function handleRemove(){
    // localStorage.removeItem("user")
    localStorage.clear()
  }
  console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' 
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter Passord" 
        value={password} onChange={(e)=>setPasswor(e.target.value)}/>
        <button type="submit">Save</button>
      </form>
      <button onClick={getData}>Get Data</button>
      <h1>{data.email} {data.password}</h1>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}
