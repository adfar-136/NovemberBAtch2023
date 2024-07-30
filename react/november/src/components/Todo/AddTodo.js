import React, { useContext } from 'react'
import { todoContext } from './TodoContext'
export default function AddTodo() {
    const [newTodo, setNewTodo] = React.useState('')
    const {addTodo} = useContext(todoContext)
    function handleSubmit(e){
         e.preventDefault()
        if(newTodo.length>0){
            addTodo(newTodo)
            setNewTodo("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your todo"
            value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}
            />
            <button type="submit" >Add Todo</button>
        </form>
    </div>
  )
}
