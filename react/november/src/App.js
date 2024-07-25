import { useReducer } from "react"
import React from 'react'
const reducer =(state,action)=>{
  console.log("state:", state)
  console.log("action:", action)
  if(action === "addone"){
    return state+1
  } else if(action === "minusone"){
    return state-1
  } else if(action === "addten"){
    return state+10
  } else if(action === "minusten"){
    return state-10
  } else {
    return state
  }
 
}
const colorReducer =(state,action)=>{
  switch(action.type){
    case "red":
      return {bgColor:action.payload}
    case "blue":
      return {bgColor:action.payload}
    case "green":
      return {bgColor:action.payload}
    case "aqua":
      return {bgColor:action.payload}
    case "pink":
      return {bgColor:action.payload}
    default:
      return state
  }
}
export default function App() {
  // const [count,setCount] = useState(0)
  const [state,dispatch] = useReducer(reducer,0)
  const [state1,dispatch1] = useReducer(colorReducer,{bgColor:"yellow"})
  const [state2,dispatch2] = useReducer(reducer,{
    count:0,
    bgColor:"red",
    number:100,
    color:"white",
    condition:true
  })

  return (
    <div style={{backgroundColor:state1.bgColor}}>
      <button onClick={()=>dispatch1({type:"red",payload:"red"})}>Red</button>
      <button onClick={()=>dispatch1({type:"blue",payload:"blue"})}>Blue</button>
      <button onClick={()=>dispatch1({type:"green",payload:"green"})}>Green</button>
      <button onClick={()=>dispatch1({type:"aqua",payload:"aqua"})}>Aqua</button>
      <button onClick={()=>dispatch1({type:"pink",payload:"pink"})}>Pink</button>
      <h1>count:{state}</h1>
      <button onClick={()=>dispatch("addone")}>+1</button>
      <button onClick={()=>dispatch("minusone")}>-1</button>
      <button onClick={()=>dispatch("addten")}>+10</button>
      <button onClick={()=>dispatch("minusten")}>-10</button>
    </div>
  )
}
