import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MusicCard from '../components/music/MusicCard'

export default function Home() {
    const [isLoading,setIsLoading] = useState(false)
    const [musicsList,setMusicList] = useState([])
    const fetchMusic = async()=>{
        try {
            setIsLoading(true)
            const music  = await axios.get("https://academics.newtonschool.co/api/v1/music/song",{
              headers:{  projectID:"8nbih316dv01"}
            });  
             setMusicList(music.data.data)
        } catch (error) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchMusic()
    },[])
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className='musicList-container'>
          {musicsList.map((music,i)=>(
            <MusicCard key={i} {...music}/>
          ))}
    </section>
  )
}
