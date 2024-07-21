import React from 'react'

export default function namePage({params}) {
    console.log(params)
  return (
    <div>
        {params.name==="math" && (
            <h1>Math Marks:100</h1>
        )}
         {params.name==="science" && (
            <h1>science Marks:100</h1>
        )}
         {params.name==="english" && (
            <h1>English Marks:100</h1>
        )}
    </div>
  )
}
