import React, { useState } from 'react'

export default function ThemeChange() {
    // const [color,setColor] = useState("white");
    // const [text,setText] = useState("DARK");
    const [condition,setCondition] = useState(true)
    function handleColor(){
        setCondition(!condition)
        // if(condition===true){
        //     setCondition(false)
        // } else{
        //     setCondition(true)
        // }
    //    if(color === "white"){
    //     setColor("black")
    //     setText("LIGHT")
    //    } else{
    //     setColor("white")
    //     setText("DARK")
    //    }
    }
  return (
    <div style={{width:"100vw",backgroundColor:condition?"white":"black",height:"70vh",border:"2px solid red"}}>
      <button onClick={handleColor}>{condition ? "DARK" : "LIGHT"}</button>

    </div>
  )
}
