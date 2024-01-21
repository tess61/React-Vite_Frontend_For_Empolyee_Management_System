import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import LIstEmployeeComponent from './components/LIstEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element = { <LIstEmployeeComponent /> }></Route>
      {/* // http://localhost:3000/employees */}
      <Route path='/employees' element = { < LIstEmployeeComponent />}></Route>
      {/* //http://localhost:3000/employees/add-employee */}
      <Route path='/add-employee' element= { <EmployeeComponent />}></Route>
      {/* //http://localhost:3000/employees/edit-employee/1 */}
      <Route path='/edit-employee/:id' element = { <EmployeeComponent />}></Route>

    </Routes>
    <FooterComponent />
    </BrowserRouter>
    
    </>
    
  )
}

export default App
