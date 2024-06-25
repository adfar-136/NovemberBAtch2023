import React from 'react'
import Grandchildren from './Grandchildren'

export default function Children({age,salary,fName}) {
  return (
    <div>
        <h1>AGE: {age}</h1>
        <h1>Salary: {salary}</h1>
        <Grandchildren height={5.9} weight="70kg" firstNamee={fName}/>
    </div>
  )
}
