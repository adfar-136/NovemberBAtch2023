import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {

  const [count,setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    if(count === 10){
      navigate("/blogs")
    }
  },[count,navigate])
  function handleClick(){
    navigate("/contact")
  }
  return (
    <div>
        <h1>About</h1>
        <button onClick={handleClick}>COntact Page</button>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
