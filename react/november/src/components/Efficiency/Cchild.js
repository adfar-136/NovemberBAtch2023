import React, { memo, useState } from 'react'

 function Cchild() {
    const [count,setCount] = useState(0)
    console.log("child")
  return (
    <div>
         <h1>Child count:{count}</h1>
         <button onClick={()=>setCount(count+1)}>+ chilld</button>
    </div>
  )
}

export default memo(Cchild)