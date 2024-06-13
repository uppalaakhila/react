import React, { useState } from 'react'
import './List.css'

export default function List() {
  const [employees, setEmployees] = useState([
    {
      name: "Akhila",
      age: 20,
      id: 451,
      gender: "Female",
    },
    {
      name: "Poojitha",
      age: 20,
      id: 453,
      gender: "Female",
    },
    {
      name: "Vishali",
      age: 21,
      id: 454,
      gender: "Female",
    },
    {
      name: "lavanya",
      age: 23,
      id: 455,
      gender: "Female",
    }
  ])
  return (
    <div className='employee-container'>
      {
        employees.map((emp) => (
          <div className='employee' key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Age: {emp.age}</p>
            <p>Gender: {emp.gender}</p>
            <p>ID: {emp.id}</p>
           
          </div>
        ))
      }

    </div>
  )
}

