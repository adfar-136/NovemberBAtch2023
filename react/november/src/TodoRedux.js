import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deleteTodo } from './components/ReduxStore/actions'
export default function TodoRedux() {
    const todo = useSelector((state)=>state.todo)
    const [task,setTask] = useState("")
    console.log(todo)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Todo Redux</h1>
        <input type="text" placeholder="Enter a todo"
        value={task} onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={()=>dispatch(addTodo(task))}>Add Todo</button>
         <ul>
            {todo.map((item,index)=>{
                return <li key={index}>{item} <button onClick={()=>dispatch(deleteTodo(index))}>Remove</button></li>
            })}
         </ul>
    </div>
  )
}
