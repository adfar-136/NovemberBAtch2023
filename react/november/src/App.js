import React from 'react'
import Countt from './Countt'
import { useDispatch, useSelector } from 'react-redux'
import {setBgColor} from "./components/ReduxStore/actions"
import TodoRedux from './TodoRedux'
export default function App() {
  const color = useSelector((state)=>state.color)
  const dispatch = useDispatch()
  // console.log(color.background)
  return (
    <div style={{backgroundColor:color.background}}>
      <Countt/>
      <button onClick={()=>dispatch(setBgColor("blue"))}>Blue</button>
      <button onClick={()=>dispatch(setBgColor("yellow"))}>Yellow</button>
      <button onClick={()=>dispatch(setBgColor("purple"))}>Purple</button>
      <button onClick={()=>dispatch(setBgColor("gray"))}>Gray</button>
      <button onClick={()=>dispatch(setBgColor("pink"))}>Pink</button>
      <button onClick={()=>dispatch(setBgColor("Orange"))}>Orange</button>
      <br /><br />
      <TodoRedux/>
    </div>
  )
}
