import {useState} from 'react'
// import Student from './Student'
// import List from './List'
// import Input from './Input'
// import CarDetails from './Cardetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
function App(){
  const [studentName,setStudentName]=useState('Yash')
  const [age,setAge]=useState(40)
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>





      {/* <p>Hello all</p>
      <p>Name is :{studentName} and his age is:{age}</p>
      <Student name="Akhila" rollno="21"/>
      <Student name="pooji" rollno="22"/>
      <Student name="vishali" rollno ="23"/> */}
      {/* <List/> */}
      {/* <Input/> */}
      {/* <CarDetails/> */}
    </div>
  )
}
export default App