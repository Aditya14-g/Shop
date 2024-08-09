import React,{useEffect,useState} from 'react';
import Head from './head';
import Navbar from './navbar';
import '../styles/home.css';
import Card from './card';
function Home(){

    const [data,setData]=useState([]);
    useEffect(()=>{
        const token = localStorage.getItem('authToken') || '';

        fetch('http://localhost:3000/home',{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(res=>{setData(res)})
        .catch(err =>{console.log(err)})
        
    },[]);

    function cardSet(data){
        return (
            <Card
                key={data.id}
                id={data.id}
                user_id={data.user_id}
                name={data.product_name}
                price={data.price}
                quantity={data.quantity}
                description={data.description}
                image={data.image}
                location={data.location}
            />
        )
    }
    return (
        <div className='home-box'>
            <div className='head'>
                <Head/>
    
            </div>
            <>
                <Navbar/>
            </>
            {/* <h1>hello</h1>
            <h1>{data[0]?.product_name}</h1> */}
            {data.map(cardSet)}
            <div>
                
            </div>
        </div>
    );
}

export default Home;