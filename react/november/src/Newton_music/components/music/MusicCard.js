import React from 'react'

export default function MusicCard(props) {
  const {title,thumbnail,artist} = props
  const artistList = artist.map((item)=>item.name).join(" & ")
  return (
    <section>
      <img src={thumbnail} alt="" />
      <div>{title}</div>
      <div>{artistList}</div>
    </section>
  )
}
