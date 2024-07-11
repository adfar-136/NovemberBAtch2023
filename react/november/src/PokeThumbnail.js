import React, { useState } from 'react'
import ExpandPokeThubmnail from './ExpandPokeThubmnail'

export default function PokeThumbnail({id
  ,name
  ,image
  ,type
  ,height
  ,weight
  ,stat1
  ,stat2
  ,stat3
  ,stat4
  ,stat5
  ,stat6
  ,bs1
  ,bs2
  ,bs3
  ,bs4
  ,bs5
  ,bs6


}) {
  const [modal,setModal] = useState(false)
  const style = `thumb-container ${type}`
  const handleModalOpen = ()=>{
    setModal(true)
  }
  return (
    <>
    <div className={style}>
        <div className="number">
            <small>#{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
            <h3>{name.toUpperCase()}</h3>
            <small>Type: {type}</small>
            <button className='pokeinfo' onClick={handleModalOpen}>Know more...</button>
        </div>
        
    </div>
    {modal === true ? 
     <ExpandPokeThubmnail
     visible={modal}
     setVisible={setModal}
     name={name}
     image={image}
     type={type}
     height={height}
     weight={weight}
     stat1={stat1}
     stat2={stat2}
     stat3={stat3}
     stat4={stat4}
     stat5={stat5}
     stat6={stat6}
     id={id}
     bs1={bs1}
     bs2={bs2}
     bs3={bs3}
     bs4={bs4}
     bs5={bs5}
     bs6={bs6}
     />:<></>  
  }
    </>
    
  )
}
