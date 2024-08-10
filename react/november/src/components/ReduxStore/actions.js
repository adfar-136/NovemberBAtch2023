export const increment = (money)=>{
    return {
        type: 'INCREMENT',
        payload:money

    }
}
export const decrement = (money)=>{
    return {
        type: 'DECREMENT',
        payload:money
    }
}

export const setBgColor =(color)=>{
    return {
        type: 'SET_BG_COLOR',
        payload:color
    }
}
export const addTodo = (item)=>{
    return {
        type: 'ADD_TODO',
        payload:item
    }
}

export const deleteTodo = (index)=>{
    return {
        type:"DELETE_TODO",
        payload:index
    }
}