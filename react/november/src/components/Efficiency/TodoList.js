import React, { useMemo } from 'react'
import { filterTodos } from './utilities'
import "./Dark.css"
export default function TodoList({todos,tab,theme}) {
    const fTodos =useMemo(
        ()=>filterTodos(todos,tab)
    ,[todos,tab])
  return (
    <div className={theme}>
       <ul>
        {fTodos.map(todo=>(
            <li key={todo.id} style={{textDecoration:todo.completed?'line-through':'none'}}>
                {todo.text}
            </li>
        ))}
       </ul>
    </div>
  )
}
