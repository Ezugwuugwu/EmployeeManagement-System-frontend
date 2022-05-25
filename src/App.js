 
import Navbar from './components/Navbar'
import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import {useState} from 'react'

function App() {

  const[employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
});

  return(
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        
      </Routes>
    </BrowserRouter>
  </>

  )
 
   
}

export default App;
   