import React, { useRef } from 'react'
import Fancyinput from './Fancyinput'

export default function ParentComponent() {
    const fancyRef = useRef()
  return (
    <div>
        <Fancyinput ref={fancyRef}/>
        <button onClick={()=>fancyRef.current.focus()}>Focus</button>
        <button onClick={()=>fancyRef.current.disable()}>Disable</button>
        <button onClick={()=>fancyRef.current.enable()}>Enable</button>
    </div>
  )
}
