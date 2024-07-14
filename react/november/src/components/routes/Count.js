import React, { useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>COunt:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
