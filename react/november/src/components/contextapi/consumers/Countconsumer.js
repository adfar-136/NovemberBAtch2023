import React, { useContext } from 'react'
import { myContext } from '../providers/StateProvider'
import { mycontextt } from '../providers/Provider'

export default function Countconsumer() {
    const context = useContext(myContext)
    const {name} = useContext(mycontextt)
    console.log(context)
  return (
    <div>
        <h1>hey {context.count}</h1>
        <h1>Hello {name}</h1>
        <button onClick={()=>context.setCount(context.count+100)}>+++++++</button>
    </div>
  )
}
