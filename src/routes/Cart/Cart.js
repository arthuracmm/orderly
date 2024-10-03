import './Cart.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainHeader from '../../Components/mainHeader/mainHeader.js';

function Cart() {
    const id = "1"; //antes o valor da variavel estava em INT troquei pra string e o data filter começou a funcionar

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/cart`)
            .then((response) => {
                setData(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Não está funcionando!", error);
            });
    }, [id]);

    const filteredCart = data.filter(item => item.id_user === id);

    return (
        <div>
             <MainHeader />
            {filteredCart.map(item => ( 
                <div className='cart-container'>
                <div className='cart-items'>
                <h1>carrinho 🛒</h1>
                
                <div className='cart-produto'>
                <div key={item.id}>
                    <img src={item.image1} alt={item.title} />
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
                
                </div>
                </div>
                </div>
            ))}
        </div>
        
    );
}

export default Cart;
