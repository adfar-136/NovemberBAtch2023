import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(){
        super()
        this.state = {
            count:0,
            name:"Vishal",
            color:"red",
            allow:false
        }
    }
//    shouldComponentUpdate(nextProps,nextState){
//     console.log("nextState",nextState)
//       if(nextState.count >= 13){
//         return false
//       }
//       return true
//    }
//    componentDidUpdate(prevProps,prevState){
//     //  console.log("prevState",prevState)
//     //  if(prevState.count === 8){
//     //     this.setState({color:"aqua"})
//     var interval = setInterval(()=>{
//         this.setState({count:this.state.count+1})
//     },1000)
//     return ()=>{
//         clearInterval(interval)
//     }
//     //  }
   
//    }
    // static getDerivedStateFromProps(props,state){
    //     console.log(props,state)
    //     return {color:props.color,name:props.name}
    // }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({count:this.state.count+1})
    //     },1000)
    // }
   
  render() {
    return (
      <div style={{backgroundColor:this.state.color}}>
        <h1>Counterrrr:{this.state.count}</h1>
        <h1>Contact Page</h1>
        {this.state.allow && <Hello/>}
        <button onClick={()=>this.setState({allow:!this.state.allow})}>Toggle</button>
        <button 
        onClick={()=>this.setState({count:this.state.count+1})}>Incremnennnt</button>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
class Hello extends Component{
    componentDidMount(){
        console.log("Mounting")
    }
    componentWillUnmount(){
        alert('Hello Unmounted')
    }
    render(){
        return <>
         <h1>Hello</h1>
        </>
    }
}