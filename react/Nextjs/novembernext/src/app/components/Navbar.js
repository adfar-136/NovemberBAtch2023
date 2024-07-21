"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const router = useRouter()
  return (
    <div>
        <button onClick={()=>router.back()}>Back</button>
        <button onClick={()=>router.forward()}>Forward</button>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/students">Students</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
