import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './components/ReduxStore/actions'
import {setBgColor} from "./components/ReduxStore/actions"

export default function Countt() {
  const color = useSelector((state)=>state.color)
  const count = useSelector((state)=>state.count)
    // console.log(count)/
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
        <h1 style={{backgroundColor:color.background}}>Counter application</h1>
        <button onClick={()=>dispatch(setBgColor("aqua"))}>Aqua</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment(10))}>Increment</button>
        <button onClick={()=>dispatch(decrement(20))}>Decrement</button>
        <button onClick={()=>dispatch(increment(100))}>Increment</button>
        <button onClick={()=>dispatch(decrement(200))}>Decrement</button>
        <button onClick={()=>dispatch(increment(100000))}>Increment</button>
        <button onClick={()=>dispatch(decrement(20000))}>Decrement</button>
        <button onClick={()=>dispatch(increment(1009876543))}>Increment</button>
        <button onClick={()=>dispatch(decrement(209876543))}>Decrement</button>
    </div>
  )
}
