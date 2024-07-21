import React from 'react'

export default function rollnoPage({params}) {
    
  return (
    <div>
        {params.rollno === "1" && (
            <h1>Adfar Rasheed</h1>
        )}
         {params.rollno === "2" && (
            <h1>Owais</h1>
        )}
         {params.rollno === "3" && (
            <h1>Suhail</h1>
        )}
         {params.rollno === "4" && (
            <h1>Idrees</h1>
        )}
    </div>
  )
}
