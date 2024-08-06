import React,{useState} from 'react';
import "../styles/login.css"
import {useNavigate} from "react-router-dom";
function Login(){
    const [name, setName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    function handleClick(event){
        event.preventDefault();
        fetch('http://localhost:3000/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                password:password
            })
        }).then(response =>{
            console.log(response);
            if(response.ok){
                navigate('/home');
            }else{
                console.log("login error");
                document.querySelector('.login-error').textContent="Please check user name or password will be wrong.";
                navigate('/login');
            }
        }).catch(error=>{
            console.error('Error:',error);
        });
    }
    return(
           <div className='box'>
             <div className='Login'>
                <h2>Login</h2>
                <form className='login-form' onSubmit={handleClick}>
                    <input className='user-name' type='text' name='username' placeholder='Enter your name ...' onChange={(event)=>{setName(event.target.value)}}></input>
                    <input className='user-password' type='password' name='password' placeholder='Enter your password' onChange={(event)=>{setPassword(event.target.value)}}></input>
                    <p className='login-error'></p>
                    <button className='login-btn' type='submit'>Login</button>
                </form>
            </div>
           </div>

    )
}

export default Login;