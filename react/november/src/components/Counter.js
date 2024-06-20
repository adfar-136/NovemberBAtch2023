import React, { useState } from 'react'
import "./counter.css"
function Counter() {
    // var count = 0;
    
    const [count,setCount] = useState(0)
    const [bColor,setBColor] = useState("red")
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
  return (
    <div className={bColor}>
        <h1>{count}</h1>
        <button onClick={()=>setBColor("blue")}>Blue</button>
        <button onClick={()=>setBColor("green")}>Green</button>
        <button onClick={()=>setBColor("pink")}>Pink</button>
        <button onClick={handleIncrement}>Increment by 1</button>
        <button onClick={handleDecrement}>Decrement by 1</button>
    </div>
  )
}

export default Counter