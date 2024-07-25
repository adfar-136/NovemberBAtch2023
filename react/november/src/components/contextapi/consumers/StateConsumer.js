import React, { useContext } from 'react'
import { myContext } from '../providers/StateProvider'
export default function StateConsumer() {
 const {count,setCount} = useContext(myContext)
  return (
    <div>
        {/* <myContext.Consumer>
            {({count,setCount})=>{
                
                return (
                    <>
                     <h1>Count: {count}</h1>
                     <button onClick={()=>setCount(count+1)}>+</button>
                    </>
                )
            }}
        </myContext.Consumer> */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>

    </div>
  )
}
