import React, { useState } from 'react';
import "../styles/register.css"
function Register(){
    const [name,setname]=useState("");
    const[password,setpassword]=useState("");
    function handleClick(){
        console.log(name);
        fetch(`http://localhost:3000/register`,
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    password:password
                })
            }
        )
    }
    return(
        <div className='box'>
            <div className='Register'>
            <h2>Register</h2>
            <form className='register-form' method='POST'>
                <input className='user-name' type='text' name='username' placeholder='Enter your uuser name' onChange={(event)=>{setname(event.target.value)}}></input>
                <input className='user-password' type='password' name='password' placeholder='Enter your password' onChange={(event)=>{setpassword(event.target.value)}}></input>
                <button className='register-btn' onClick={handleClick}>Register</button>
            </form>
        </div>
        </div>
    )
}

export default Register;