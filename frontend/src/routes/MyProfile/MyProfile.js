import './MyProfile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainHeader from '../../Components/mainHeader/mainHeader.js';

function MyProfile() {
    const [data, setData] = useState({});
    const userId = localStorage.getItem('userId'); // Recupera o ID do usuário logado

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:8081/users/${userId}`) // Pega os dados do usuário
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.error('Erro ao buscar os dados do usuário:', err);
                });
        }
    }, [userId]);

    return (
        <div>
            <MainHeader />
            <div className='BodyMainProfile'>
                <div className='MainProfile'>
                    <h1>Minha Conta</h1>
                    <div className='MainProfileItens'>
                       
                        <div className='ProfileInputs'>
                           
                            <label>
                                Nome Completo
                                <input value={data.nome || ''} readOnly />
                            </label>
                            <label>
                                Email
                                <input value={data.email || ''} readOnly />
                            </label>
                            <label>
                                Telefone
                                <input value={data.telefone || ''} readOnly />
                            </label>
                            <label>
                                Endereço
                                <input value={data.endereco || ''} readOnly />
                            </label>
                            <label>
                                CPF
                                <input value={data.cpf || ''} readOnly />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
