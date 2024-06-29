import React, { useEffect, useState } from 'react'

export default function App() {
  
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(100)
  const [number1,setNumber1] = useState(1000)
  useEffect(()=>{
    console.log("useEffect")
    // const fun =()=>{
    //   console.log("adfar")
    // }
    // document.addEventListener("click",fun)
    // return ()=>{
    //   document.removeEventListener("click",fun)
    // }
   let interval =  setInterval(()=>{
    console.log("Adfar")
  },3000)
  return ()=>{
    clearInterval(interval)
  }
  })
  return (
    <div>
       <h1>count: {count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <h1>Number: {number}</h1>
       <button onClick={()=>setNumber(number-1)}>Decrement</button>
       <h1>Number1: {number1}</h1>
       <button onClick={()=>setNumber1(number1+10)}>Decrement</button>
    </div>
  )
}
