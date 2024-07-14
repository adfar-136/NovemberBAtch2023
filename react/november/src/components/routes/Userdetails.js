import React from 'react'
import { useParams } from 'react-router-dom'
import User1 from './User1'
import User2 from './User2'

export default function Userdetails() {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
        {id === "1" && (
            <User1/>
        )}
        {id === "2" && (
            <User2/>
        )}
    </div>
  )
}
