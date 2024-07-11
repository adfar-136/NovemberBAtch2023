import { Component } from "react";

class Count extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            name:"Adfar"
        }
        // this.handleIncrement=this.handleIncrement.bind(this)
    }
    handleIncrement=()=>{
       this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <>
             <h1>Count application</h1>
             <h1>count: {this.state.count}</h1>
             <h2>{this.props.name}</h2>
             <h2>{this.props.age}</h2>
             <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
             <button onClick={this.handleIncrement}>Increment</button>
             <h1>{this.state.name}</h1>
             <button onClick={()=>this.setState({name:"Vishal"})}>Change</button>

            </>
        )
    }
}
export default Count