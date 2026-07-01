import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <div className='text-center px-4 py-2'>
    <h1 className="inline-block text-3xl font-bold text-blue-500 bg-blue-100 px-4 py-2 text-center ">Currency Convertor</h1>
   </div>
   </>
  )
}

export default App
