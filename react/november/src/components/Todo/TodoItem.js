import React, { useContext, useState } from 'react'
import { todoContext } from './TodoContext'
export default function TodoItem({item,index}) {
    
    const {deleteTodo,toggleTodo}= useContext(todoContext)
  return (
    <div>
        <li style={{textDecoration:item.completed?'line-through':'none'}} 
        onClick={()=>toggleTodo(index)}>{item.todo}</li>
        <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}
