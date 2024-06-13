import React, {useState} from 'react'
export default function Input(){
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    // function handleUsername(e){
    //     setUserName(e.target.value)
    // }
    function submit(){
        console.log(userName)
        console.log(password)
    }
    // function userPassword(e){
    //     setPassword(e.target.value)
    // }
    return(
        <div>
            <p>
                <input placeholder='Enter name' onChange={(e)=>{setUserName(e.target.value)}}/>
                <button onClick={submit}>Submit</button>
            </p>
          
        </div>
    )
}