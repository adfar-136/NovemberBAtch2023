import React, { Component } from 'react'
import Contact from './components/classcomponents/Contact'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      color:"red"
    }
    console.log("constructor")
  }
 
  render() {
    console.log("render")
    return (
      <div>
        <Contact color={this.state.color} name="Adfar"/>
        {/* <h1>Hello Morrow</h1>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>this.setState({color:"Yellow"})}>Yellow</button>
        <button onClick={()=>this.setState({color:"pink"})}>pink</button>
        <button onClick={()=>this.setState({color:"blue"})}>blue</button>
        <button onClick={()=>this.setState({color:"orange"})}>orange</button>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button> */}
      </div>
    )
  }
}
