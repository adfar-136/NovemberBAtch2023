import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            error:null,
            errorInfo:null
        }
    }
    
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
       this.setState({
        error:error,
        errorInfo:info
       })
    }
  render() {
    if(this.state.errorInfo){
        return <>
         <h1>Error Agaya</h1>
         <h2>Refresh</h2>
         <p>{this.state.error.message}</p>
         <p>{this.state.errorInfo.componentStack}</p>
        </>
    }
    return this.props.children
  }
}
