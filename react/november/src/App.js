import React, { useEffect, useState } from 'react'

export default function App() {
  const [joke,setJoke]=useState({})
  useEffect(()=>{
    handleJoke()
  },[])
  async function handleJoke(){
   var data = await fetch('https://api.chucknorris.io/jokes/random')
   var jsonData =await data.json();   
   setJoke(jsonData)
  }
  return (
    <div>
       <h1>{joke.value}</h1>
       <img src={joke.icon_url} alt="" />
      <button onClick={handleJoke}>generateJoke</button>
    </div>
  )
}
