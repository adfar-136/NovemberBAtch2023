import React, { createContext, useState } from 'react'
const themeContext = createContext()
export default function Themeprovider({children}) {
    const [condition,setCondition] = useState(true);
  return (
    <div>
      <themeContext.Provider value={{condition,setCondition}}>
         {children}
      </themeContext.Provider>
    </div>
  )
}
export {themeContext}