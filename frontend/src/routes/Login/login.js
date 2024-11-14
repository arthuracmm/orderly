import React, { useState } from 'react';
import "./login.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event){
    event.preventDefault();

    axios.post('http://localhost:8081/login', { email, password })
      .then(res => {
        if (res.status === 200 && res.data.message === "Login Bem Sucedido") {
          alert('Login bem-sucedido!');
          navigate('/');
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          alert('Erro: Não existe um usuário com esse e-mail e senha.');
        } else {
          alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        }
        console.error(err);
      });
  }

  return (
    <div className='login-content'>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='login-inputs'>
            <h1>Login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
            </div>
            <button>Login</button>
          </div>
        </form>
    </div>
  );
}

export default Login;