import React from 'react'

export default function empidPage({params}) {

  return (
    <div>
        <h1>{params.empid}</h1>
    </div>
  )
}

// /students/:rollno/subject/:name