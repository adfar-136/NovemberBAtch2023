import React from 'react'
import Children from './Children'

export default function Parent({firstName,skill}) {
    
  return (
    <div>
        <h1>FirstName: {firstName}</h1>
        <ul>
            <li>{skill}</li>
        </ul>
        <Children age={25} salary={5000} fName= {firstName}/>
    </div>
  )
}
