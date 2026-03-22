import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setcounter] = useState(1)
  const addValue = () => {
    console.log("Clicked",counter);
    setcounter(counter + 1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value:{counter}</h2>
    <button onclick={addValue}>Add Value:{counter}</button>
      <button>Remove Value:{counter}</button>
    </>
  )
}

export default App
