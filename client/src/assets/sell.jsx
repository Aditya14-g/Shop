import React from 'react';
import Head from './head';
function Sell(){
    function handleSubmitClick(){

    }
    return (
        <>
            <div className='head'>
                <Head/>
            </div>
            <div>
                <form className='sell-form' method='post' onSubmit={handleSubmitClick}>
                    <input className='sell-input-name' type='text' placeholder='Enter name of product'></input>
                    <input className='sell-input-image' type='text' placeholder='Enter image URL'></input>
                    <input className='sell-input-price' type='number' placeholder='Enter price '></input>
                    <input className='sell-input-address' type='text' placeholder='Shop Address'></input>
                    <input className='sell-input-description' type='text' placeholder='Description'></input>
                    <button className='sell-input-submit' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Sell;