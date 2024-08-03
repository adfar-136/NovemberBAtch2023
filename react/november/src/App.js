import React, { useCallback, useState } from 'react'
const x = new Set()
export default function App() {
  const [count,setCount]  = useState(0)
  const [number,setNumber] = useState(10)
  const incrementCount=useCallback(()=>{
    setCount(count+1)
  },[count])
  const decrementCount=useCallback(()=>{
    setCount(count-1)
  },[count])
  const incrementNumber=useCallback(()=>{
    setNumber(number+1)
  },[number])
  const decrementNumber=useCallback(()=>{
    setNumber(number-1)
  },[number])
  x.add(incrementCount)
  x.add(decrementCount)
  x.add(incrementNumber)
  x.add(decrementNumber)
  alert(x.size)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incrementCount}>+count</button>
      <button onClick={decrementCount}>-count</button>
      <h1>number:{number}</h1>
      <button onClick={incrementNumber}>+NUmber</button>
      <button onClick={decrementNumber}>-Number</button>
    </div>
  )
}
