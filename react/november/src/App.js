import { Component } from "react"
import Count from "./components/classcomponents/Count"

class App extends Component{
  render(){
    return <>
      <h1>Adfar Rasheedd</h1>
      <Count name="Hello" age={45}/>
    </>
  }
}
export default App