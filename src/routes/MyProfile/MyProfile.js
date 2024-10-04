import './MyProfile.css';
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
    
    return (
        <div>
             <MainHeader />
            <div className='profile-container'>
            <h1>Meu Perfil</h1>
            </div>
        </div>
        
    );
}

export default Cart;
