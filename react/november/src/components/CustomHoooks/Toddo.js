import React, { useState } from 'react'
import useTodo from './useTodo'

export default function Toddo() {
    const [input,setInput] = useState()
    const {todos,push,pull} = useTodo()
    function handleSubmit(e){
        e.preventDefault()
        push(input)
        setInput("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter task'
            value={input} onChange={(e)=>setInput(e.target.value)}/>
            <input type="submit" value="Add" />
        </form>
        <ul>
            {todos.map((item,index)=>{
                return <>
                 <li>{item}</li>
                 <button onClick={()=>pull(index)}>Remove</button>
                </>
            })}
        </ul>
    </div>
  )
}
