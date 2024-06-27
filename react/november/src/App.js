import React, { useState } from 'react'

export default function App() {
  const [allow,setAllow] = useState(false)
  const [input,setInput] = useState({
    name: '',
    age:'',
    email: '',
  })
  function handleSubmit(e){
     e.preventDefault()
     setAllow(true)
  }
  return (
    <div>
      <h1>State Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' 
        value={input.name} 
        onChange={(e)=>setInput((prev)=>({...prev,name:e.target.value}))}
        />
        <br />
        <input type="text" placeholder='age' 
         value={input.age} 
         onChange={(e)=>setInput((prev)=>({...prev,age:e.target.value}))}
        /><br />
        <input type="text" placeholder='email' 
         value={input.email}
         onChange={(e)=>setInput((prev)=>({...prev,email:e.target.value}))}
        /><br />
        <input type="submit" value="Login" />
      </form>
      {allow ? (
        <>
         <h1>{input.name}</h1>
         <h1>{input.age}</h1>
         <h1>{input.email}</h1>
        </>
      ):""}
    </div>
  )
}
