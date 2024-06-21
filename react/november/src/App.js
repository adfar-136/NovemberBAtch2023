import React from 'react'

export default function App() {
  // const numbers = [1,2,3,3,4,5,6]
  const data = [
    ["Adfar","Rasheed","Jenny","Anjali"],
    ["HTML","CSS","JS","React"],
    ["1","2","3","4"]
  ]
  // const arr = numbers.map((item,index)=>{
  //     return <li>{item}</li>
  // // })
  // console.log(arr);
  const main = [
    {name:'Adfar',skill:"html",rating:1},
    {name:'Rasheed',skill:"Css",rating:2},
    {name:'Jenny',skill:"JS",rating:3},
    {name:'Anjali',skill:"react",rating:4},
  ]
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Skill</th>
          <th>Rating</th>
        </tr>
        {main.map((item,index)=>{
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.skill}</td>
              <td>{item.rating}</td>
            </tr>
          )
        })}
      </table>
      <ul>
       {/* {numbers.map((item,index)=>{
          return <li key={index}>{item}</li>
       })} */}
       {/* <p>{data.map((item=><p key={item}>{item}</p>))}</p> */}
       {data.map((item,index)=>{
           return item.map((list,index)=>{
            return <li key={index}>{list}</li>
           })
       })}
      </ul>
    </div>
  )
}
