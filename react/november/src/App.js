import React from 'react'

export default function App() {
  return (
    <div>
      <Hello>
        <h1>hello</h1>
        <h2>Gello</h2>
        <h3>Fello</h3>
      </Hello>
    </div>
  )
}


function Hello({children}){
  return (
    <>
    {children}
      <h1>Hello Motto</h1>
      <h1></h1>
    </>
  )
}