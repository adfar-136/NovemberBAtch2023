import React, { useRef } from 'react'
import Button from './Button'

export default function ForwardRef() {
    const btnRef = useRef(null)
    const handleClick = () => {
       if(btnRef.current){
        btnRef.current.textContent = "Clicked"
       }
    }
  return (
    <div>
        <h1 >Hello</h1>
        <Button ref={btnRef} onclick={handleClick}>
            Hello
        </Button>
    </div>
  )
}
