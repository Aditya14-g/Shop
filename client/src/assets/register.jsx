import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/register.css";

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        console.log(name);
        fetch(`http://localhost:3000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
        .then(response => {
            if (response.status===202) {
                navigate('/login');
            } else {
                console.error('Registration failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='box'>
            <div className='Register'>
                <h2>Register</h2>
                <form className='register-form' onSubmit={handleClick}>
                    <input 
                        className='user-name' 
                        type='text' 
                        name='username' 
                        placeholder='Enter your user name' 
                        onChange={(event) => { setName(event.target.value) }} 
                    />
                    <input 
                        className='user-password' 
                        type='password' 
                        name='password' 
                        placeholder='Enter your password' 
                        onChange={(event) => { setPassword(event.target.value) }} 
                    />
                    <button className='register-btn' type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
