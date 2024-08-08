import React, { useState } from 'react'
import ErrorBoundary from './components/Efficiency/ErrorBoundary/ErrorBoundary'
import Counterrrr from './components/Efficiency/ErrorBoundary/Counterrrr'
import Counter from './components/CustomHoooks/Counter'

export default function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Adfar Sahab</h1> <h1>Adfar Sahab</h1>
      <h1>App counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>App Incrementer</button>
      <ErrorBoundary>
        <Counterrrr/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counterrrr/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counterrrr/>
        <Counter/>
      </ErrorBoundary>
    </div>
  )
}
