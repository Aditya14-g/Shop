import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/App.css"
// import Login from './assets/login';
// import Register from './assets/register';
function App(){
  const navigate= useNavigate();

  function handleRegisterClick(){
    navigate('/register');
  }

  function handleLoginClick(){
    navigate('/Login');
  }
  return (
    <div className='box'>
      <div className='main-box'>
      <div className='register'>
        <h2>Register</h2>
        <p>If you are new user please click here.</p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      <div className='login'>
        <h2>Login</h2>
        <p>If you are an existing user please click here</p>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default App;