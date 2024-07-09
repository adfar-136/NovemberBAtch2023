import React from 'react'

export default function PokeThumbnail({id,name,image,type}) {
    
  const style = `thumb-container ${type}`
  return (
    <div className={style}>
        <div className="number">
            <small>#{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
            <h3>{name.toUpperCase()}</h3>
            <small>Type: {type}</small>
            <button>Know more...</button>
        </div>
        
    </div>
  )
}
