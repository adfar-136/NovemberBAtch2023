import React, { memo, useState } from 'react'
import Cchild from './Cchild'

function Pparent() {
    const [count,setCount] = useState(0)
    console.log("parent")
  return (
    <div>
        <h1>Partent component</h1>
        <h1>Parent:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+parent</button>
        <Cchild/>
    </div>
  )
}
export default memo(Pparent)