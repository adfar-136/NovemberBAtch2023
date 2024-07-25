import React, { useContext } from 'react'
import Comp3 from './Comp3'
import {fName,lName}  from "../../App"
export default function Comp2() {
    const firstName = useContext(fName)
    const lastName = useContext(lName)
  return (
    <div>
        <h1>hey {firstName}</h1>
        <h1>hey {lastName}</h1>
        <Comp3/>
    </div>
  )
}
