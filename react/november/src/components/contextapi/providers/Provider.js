import React, { createContext } from 'react'
const mycontextt = createContext()
export default function Provider({children}) {
  return (
    <div>
        <mycontextt.Provider value={{ name: 'Vishal' }}>
          {children}
        </mycontextt.Provider>
    </div>
  )
}
export {mycontextt}


