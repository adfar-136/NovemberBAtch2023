"use client"
import React, { useState } from 'react'
import adfarpage from '../about/adfar/page'

export default function Count() {
    const [count,setCount]= useState(0)
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
