import React, { createContext, useState } from 'react'
import StateConsumer from '../consumers/StateConsumer'
import Countconsumer from '../consumers/Countconsumer'
const myContext = createContext()
export default function StateProvider() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <myContext.Provider value={{count,setCount}}>
           <StateConsumer/>
           <Countconsumer/>
        </myContext.Provider>
    </div>
  )
}
export {myContext}