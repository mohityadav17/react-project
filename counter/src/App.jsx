import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue= ()=>{
    counter=counter+1
    setCounter(counter)
  }
  const removeValue=()=>{
    counter=counter-1
    setCounter(counter)
  }

  return (
    <>
   <h1>Rao Sahab</h1>
   <h2>Counter value: {counter}</h2>
   <button onClick={addValue}>add value</button>
   <br />
   <button onClick={removeValue} >remove value</button>
   <footer>{counter}</footer>
   </>
  )
}

export default App
