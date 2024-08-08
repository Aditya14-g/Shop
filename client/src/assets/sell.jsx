import React,{useState} from 'react';
import Head from './head';
import "../styles/sell.css";
import {useNavigate } from "react-router-dom";

function Sell(){
    const [product,setProduct]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState(0);
    const [address,setAddress]=useState("");
    const [quantity,setQuantity]=useState(0);
    const [des,setDes]=useState("");

    const navigate=useNavigate();

    function handleSubmitClick(event){
        event.preventDefault();
        fetch('http://localhost:3000/sell',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product:product,
                image:image,
                price:price,
                address:address,
                quantity:quantity,
                des:des,
            })
        }).then(response=>{
            console.log(response);
            if(response.ok){
                navigate('/home');
            }else{
                console.log("Something went wrong.");
            }
        }).catch(error=>{
            console.error("Error:", error);
        });
    }
    return (
        <>
            <div className='head'>
                <Head/>
            </div>
            <div className='sell-main-box'>
                <form className='sell-form' onSubmit={handleSubmitClick}>
                    <input className='sell-input-name' type='text' placeholder='Enter name of product' onChange={(event)=>setProduct(event.target.value)}></input>
                    <input className='sell-input-image' type='text' placeholder='Enter image URL' onChange={(event)=>setImage(event.target.value)}></input>
                    <input className='sell-input-price' type='number' placeholder='Enter price ' onChange={(event)=>setPrice(event.target.value)}></input>
                    <input className='sell-input-address' type='text' placeholder='Shop Address' onChange={(event)=>setAddress(event.target.value)}></input>
                    <input className='sell-input-quantity' type='number' placeholder='Number of goods' onChange={(event)=>setQuantity(event.target.value)}></input>
                    <input className='sell-input-description' type='text' placeholder='Description' onChange={(event)=>setDes(event.target.value)}></input>
                    <button className='sell-input-submit' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Sell;