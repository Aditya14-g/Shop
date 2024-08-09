import React from 'react';

function Card(props){
    return(
        <div className='card-box'>
            <h1>{props.name}</h1>
            <img src='https://images.indianexpress.com/2023/03/elaichi-banana_200_pixabay.jpg?w=640'></img>
            <h2>Price: {props.price}</h2>
            <h2>Quantity: {props.quantity}</h2>
            <h4>Store Address: {props.location}</h4>
            <p>Description: {props.description}</p>
        </div>
        
    )
}

export default Card;