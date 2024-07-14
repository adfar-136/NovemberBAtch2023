import React from 'react'
import { useParams } from 'react-router-dom'

export default function Phone() {
    const {id,phone} = useParams()
  return (
    <div>
        <h1>Phone details for a specific user</h1>
        {(id === "1" && phone === "a") && (
            <h1>Adfar Rasheeds phone number is 70065252041</h1>
        )}
        {(id === "1" && phone === "b") && (
            <h1>Adfar Rasheeds phone number is 123456789</h1>
        )}
        {(id === "2" && phone === "a") && (
            <h1>Vishal Chavan phone number is 9876543210</h1>
        )}
        {(id === "2" && phone === "b") && (
            <h1>Vishal chavan phone number is 9877890987</h1>
        )}
    </div>
  )
}
