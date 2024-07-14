import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import Users from './components/routes/Users'
import Blogs from './components/routes/Blogs'
import Userdetails from './components/routes/Userdetails'
import Phone from './components/routes/Phone'


export default function App() {

  return (
    <>
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<Userdetails/>}/>
        <Route path='/users/:id/contact/:phone' element={<Phone/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
