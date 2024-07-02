import React, { useEffect, useState } from 'react'
import Item1 from './components/Item1'

export default function App() {
  const [condition,setCoondition] = useState(true)
  const [number,setNumber] = useState(100)
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count+1)
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  },[count])
  return (
    <div>
      <button onClick={()=>setCoondition(!condition)}>Click</button>
      <h1>Adfar Rasheed</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <h1>number: {number}</h1>
      <button onClick={()=>setNumber(number+10)}>Change Number</button>
      {condition && <Item1/>}
    </div>
  )
}
