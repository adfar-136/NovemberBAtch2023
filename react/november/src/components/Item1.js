import React, { useState } from 'react'

export default function Item1() {
    const [text,setText] = useState("item")
  return (
    <div>
        <h1>Hello {text}</h1>
        <button onClick={()=>setText("morning")}>Change</button>
    </div>
  )
}
