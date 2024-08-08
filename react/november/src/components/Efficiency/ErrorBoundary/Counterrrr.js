import React, { useEffect, useState } from 'react'

export default function Counterrrr() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        if(count === 10){
            throw new Error("bas hogaya")
        }
    },[count])
  return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
