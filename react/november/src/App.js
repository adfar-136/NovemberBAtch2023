import React, { useState } from 'react'

export default function App() {
  const [firstName,setFirstName] = useState("");
  const [allow,setAllow] = useState(false)
  const [email,setEmail]= useState("")
  console.log(firstName)
  function handleSubmit(e){
    e.preventDefault()
     setAllow(true)
  }
  return (
    <div>
      <h1>React Controlled Forms</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter Name'
        value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br /><br />
        <input type="email" placeholder='enter Email'
        value={email}/> <br /> <br />
         
        <input type="submit" value="Submit" />
        <button onClick={()=>setFirstName("hello")}>hello</button>
      </form>
      {allow && <h1>hello {firstName}</h1>}
    </div>
  )
}
