
import React, {useState} from 'react'
export default function Home() {
const[userName,setUserName]=useState('')
const[password,setPassword]=useState('')
function submit(){
  console.log(userName)
  console.log(password)
  setPassword('')
  setUserName('')
}
  
  return (
    <div>
      <h1>This is Home</h1>
      <p><input value={userName} placeholder='Enter name' onChange={(e)=>{setUserName(e.target.value)}}/></p>
      <p><input value={password} placeholder='Password'   onChange={(e)=>{setPassword(e.target.value)}}/></p>
                <button onClick={submit}>Submit</button>
    </div>
  )
}
