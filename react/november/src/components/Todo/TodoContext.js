import React, { createContext, useState } from 'react'
const todoContext = createContext()
export default function TodoContext({children}) {
    const [todos,setTodos] = useState([])
    const addTodo = (todo)=>{
        setTodos([...todos,{todo,completed:false}])
    }
    const deleteTodo =(index)=>{
       const newTodo = todos.filter((_,i)=>i!==index)
       setTodos(newTodo)
    }
    const toggleTodo=(index)=>{
        const newTodo = todos.map((item,i)=>
            i===index?{...item,completed:!item.completed}:item)
        setTodos(newTodo)
    }
  return (
    <div>
        <todoContext.Provider value={{todos,addTodo,deleteTodo,toggleTodo}}>
             {children}
        </todoContext.Provider>
    </div>
  )
}

export {todoContext}