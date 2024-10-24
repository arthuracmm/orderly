import './MyProfile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainHeader from '../../Components/mainHeader/mainHeader.js';

function MyProfile() {

    const [data, setData] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/users")
        .then((res) => {
        setData(res.data)
        console.log(res.data)
        })
        .catch(() => {
        console.log('Deu errado')
        })
    }, [])

    return (
        <div>
            <MainHeader />
            <div className='BodyMainProfile'>
                <div className='MainProfile'>
                    <h1>Minha Conta</h1>
                    <div className='MainProfileItens'>
                    
                        <div className='ProfileImage'>
                            <img src={data.image} alt={data.name} />
                            <button>Alterar</button>
                        </div>
                        <div className='ProfileInputs'>
                            <label>
                            Username
                            <input value={data.username}></input>
                            </label>
                            <label>
                            Nome Completo
                            <input value={data.name}></input>
                            </label>
                            <label>
                            Email
                            <input value={data.email}></input>
                            </label>
                            <label>
                            Telefone
                            <input value={data.tel}></input>
                            </label>
                            <label>
                            Endereço
                            <input value={data.adress}></input>
                            </label>
                            <label>
                            CPF
                            <input value={data.cpf}></input>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
