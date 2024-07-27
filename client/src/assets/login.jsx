import React from 'react';
import "../styles/login.css"
function Login(){
    return(
           <div className='box'>
             <div className='Login'>
                <h2>Login</h2>
                <form className='login-form'>
                    <input className='user-name' type='text' name='username' placeholder='Enter your name ...'></input>
                    <input className='user-password' type='password' name='password' placeholder='Enter your password'></input>
                    <button className='login-btn'>Login</button>
                </form>
            </div>
           </div>

    )
}

export default Login;