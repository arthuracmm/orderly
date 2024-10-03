import './Cart.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainHeader from '../../Components/mainHeader/mainHeader.js';

function Cart() {
    const id = "1";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/cart`)
            .then(response => setData(response.data))
            .catch(error => console.error("Erro:", error));
    }, [id]);

    const updateQuantity = (itemId, change) => {
        const item = data.find(item => item.id === itemId);
        const newQuantity = Math.max(1, item.quantity + change);

    axios.patch(`http://localhost:5000/cart/${itemId}`, { quantity: newQuantity }) // Usando PATCH
        .then(() => {
            setData(prev => prev.map(i => (i.id === itemId ? { ...i, quantity: newQuantity } : i)));
        })
        .catch(err => console.error('Erro ao atualizar:', err));
    }

    const filteredCart = data.filter(item => item.id_user === id);

    return (
        <div>
             <MainHeader />
             
            <div className='cart-container'>
            <h1>Carrinho</h1>
            {filteredCart.map(item => ( 
                
                    <div key={item.id}className='cart-produto'>
                        <div className='cart-image-name'>
                        <img src={item.image1} alt={item.title} />
                        <h1>{item.title}</h1>
                        </div>
                        <div className='cart-quantity'>
                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <p className='cart-price'>{(item.price * item.quantity).toFixed(2)}</p>
                        <button className='cart-button-buy'>Comprar</button>
                    </div>
                
            ))}
            </div>
        </div>
        
    );
}

export default Cart;
