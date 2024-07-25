import React from 'react'
import {fName,lName}  from "../../App"
export default function Comp3() {
  return (
    <div>
        <fName.Consumer>
            {(x)=>{
                return (
                    <lName.Consumer>
                {(y)=>{
                   return (
                    <>
                     <h1> my first Name is {x} and my last name is {y}</h1>
                    </>
                   )
                }
                }
            </lName.Consumer>
                )
            }}
        </fName.Consumer>
    </div>
  )
}
