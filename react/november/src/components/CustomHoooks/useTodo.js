import { useState } from "react";

const useTodo = ()=>{
    const [todos, setTodos] = useState(["HTML","CSS","JS"]);
    const push=(task)=>{
        // let newLList = todos.concat(task)
        let newList = [...todos,task]
        setTodos(newList)
    }
    const pull = (i)=>{
        const newList = todos.filter((item,index)=>{
            return index !== i;
        })
        setTodos(newList)
    }
    return {
        todos,
        push,
        pull,
    }
}
export default useTodo