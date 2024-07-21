"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PageAbout() {
  const router = useRouter()
  console.log(router)
  function handleClick(){
    router.push("/contact")
  }
  return (
    <div>
        <h1>Adfar RAsheeeddd About page</h1>
        <button onClick={handleClick}>Contact Page</button>
    </div>
  )
}
