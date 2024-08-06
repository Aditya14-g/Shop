import React from 'react';
import Head from './head';
import Navbar from './navbar';
import '../styles/home.css';
function Home(){
    return (
        <div className='home-box'>
            <div className='head'>
                <Head/>
    
            </div>
            <>
                <Navbar/>
            </>
        </div>
    );
}

export default Home;