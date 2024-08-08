import React,{useEffect} from 'react';
import Head from './head';
import Navbar from './navbar';
import '../styles/home.css';
function Home(){
    useEffect(()=>{
        fetch('http://localhost:3000/home',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({})
        }).then(response);
        
    },[]);
    return (
        <div className='home-box'>
            <div className='head'>
                <Head/>
    
            </div>
            <>
                <Navbar/>
            </>
            <div></div>
        </div>
    );
}

export default Home;