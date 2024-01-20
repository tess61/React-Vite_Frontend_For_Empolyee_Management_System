import { useState } from 'react'
import './App.css'
import LIstEmployeeComponent from './components/LIstEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LIstEmployeeComponent />
  )
}

export default App
