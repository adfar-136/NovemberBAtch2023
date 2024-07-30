import React, { useContext } from 'react'
import { todoContext } from './TodoContext'
import TodoItem from './TodoItem'
export default function TodoLst() {
    const {todos} = useContext(todoContext)
  return (
    <ul>
      {todos.map((item,index)=>{
        return <TodoItem key={index} item={item} index={index}/>
      })}  
    </ul>
  )
}
