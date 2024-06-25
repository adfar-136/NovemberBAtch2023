import React from 'react'

export default function Component({children}) {
  return (
    <div>
        {children}
        <h1>Hello component</h1>
        {children}
        
    </div>
  )
}
