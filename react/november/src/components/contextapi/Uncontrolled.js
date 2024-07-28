import React, { useRef, useState } from 'react'

export default function Uncontrolled() {
    const [condition,setCondition] = useState(false)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const btnRef = useRef(null)
    function handleSubmit(e){
       e.preventDefault()
    //    console.log(nameRef.current.value)
    //    console.log(emailRef.current.value)
    //    console.log(passRef.current.value)
       nameRef.current.style.color="red";
       setCondition(true)
    }
   function handleClick(){
         btnRef.current.innerHTML ="HElllllo"
         btnRef.current.onfocus=()=>{
            btnRef.current.style.backgroundColor = "red"
         }
         btnRef.current.onclick=()=>{
            alert('adfar')
         }
   }
  return (
    <div>
        <button ref={btnRef}>Hello</button>
        <button onClick={handleClick}>Click</button>
        <form>
            <input type="text"
            placeholder='Enter Your Name' ref={nameRef}/> <br /><br />
            <input type="email" placeholder='Enter Your EMail' ref={emailRef}/> <br /><br />
            <input type="password" placeholder='Enter Your PAssword' ref={passRef}/> <br /><br />
            <button type='submit' onClick={handleSubmit}>SignUp</button>
      </form>
      <h1>hello {condition ? nameRef.current.value:"nothing"}</h1>
    </div>
  )
}
