import React from 'react'

export default function App() {
  var fName = "Adfarrrr"
  return (
    <div>
      <h1 >App Parent</h1>
      <Children firstName={fName} salary="Rs4000" skill = {[1,2,3,4]} age = {34}/>
      {/* <Children firstName="Ankit" salary="Rs2000" age={44} /> */}
    </div>
  )
}
function Children(props){
  console.log("props: " ,props)
  return (
    <div>
      {props.skill.map((item,index)=>{
        return <h1 key={index}>{item}</h1>
      })}
      <h1>Children </h1>
      {/* <p>My First Name is {props.firstName}, my age is {props.age}, and my salary is {props.salary}</p> */}
      <Grandchildren fName={props.firstName} sal={props.salary} umar={props.age}/>
    </div>
  )
}
function Grandchildren(props){
  console.log("p",props)
  return (
    <div>
      <mark>{props.fName} {props.sal} {props.umar}</mark>
      <h1>Grand Children</h1>
    </div>
  )
}