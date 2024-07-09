import React, { useEffect, useState } from 'react'
import "./App.css"
import PokeThumbnail from './PokeThumbnail'
export default function App() {
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState({})
  useEffect(()=>{
     getAllPokemons()
  },[])
  const getAllPokemons =async()=>{
    const res =await fetch("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1")
    const data =await res.json()
    
    setLoadMore(data[0].next)
    
    function createPokeMonObject(result){
      result.forEach(async (pokemon)=>{
           const res =await fetch(pokemon.url);
           const dataa =await res.json();
           setAllPokemons(prev=>([...prev, dataa]))
           
      })
    }
    createPokeMonObject(data[0].results)
 
  }
  async function getMoreData(){
    const res =await fetch(loadMore);
    const data =await res.json();
    setLoadMore(data[0].next)
    
    function createPokeMonObject(result){
      result.forEach(async (pokemon)=>{
           const res =await fetch(pokemon.url);
           const dataa =await res.json();
           setAllPokemons(prev=>([...prev, dataa]))
           
      })
    }
    createPokeMonObject(data[0].results)
    
  }
  return (
    <div id='parent'>
      <div id='section'>
        <div className="content">
            <h2>Pokemon</h2>
            <h2>Pokemon</h2>
        </div>
        <div className="content2">
            <h2>Kingdom</h2>
            <h2>Kingdom</h2>
        </div>
      </div>
      <div className="app-container">
        <div className="pokemon-container">
            <div className="all-container">
              {allPokemons.map((pokemon,index)=>
              <PokeThumbnail
             
              key={index}
              id={pokemon[0].id}
              name={pokemon[0].name}
              image={pokemon[0].image}
              type={pokemon[0].type}
              />)}
            </div>
            <button className='load-more' onClick={()=>getMoreData()}>More Pokemons</button>
        </div>
      </div>

    </div>
  )
}
