import React,{useEffect} from 'react'
import useCounter from './useCounter'

export default function Counter() {
  
    const {count,increment,decrement} = useCounter()
    useEffect(()=>{
      if(count === 5){
          throw new Error("bas hogaya")
      }
  },[count])
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>increment()}>+count</button>
        <button onClick={()=>decrement()}>-count</button>
    </div>
  )
}
