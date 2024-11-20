import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [cep, setCEP] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (isRegistering) {
      // Modo de Cadastro
      axios.post('http://localhost:8081/register', {
        name, email, password, cpf, cep, telefone, endereco
      })
        .then(res => {
          if (res.status === 200) {
            alert('Usuário cadastrado com sucesso!');
            setIsRegistering(false); // Volta para o modo Login
          }
        })
        .catch(err => {
          alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
          console.error(err);
        });
    } else {
      // Modo de Login
      axios.post('http://localhost:8081/login', { email, password })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('userId', res.data.userId); // Armazena o ID do usuário
            localStorage.setItem('role', res.data.role); // Armazena o papel do usuário (admin ou user)
            if (res.data.role === "admin") {
              alert('Login bem-sucedido como administrador!');
              navigate('/admin'); // Redireciona para a página de administrador
            } else if (res.data.role === "user") {
              alert('Login bem-sucedido como usuário!');
              navigate('/'); // Redireciona para a página de usuário comum
            } else {
              alert('Erro desconhecido no login.');
            }
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
  }

  return (
    <div className='login-content'>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-inputs'>
          <h1>{isRegistering ? 'Cadastrar' : 'Login'}</h1>
          {isRegistering && (
            <>
              <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder='Nome' onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="cpf">CPF</label>
                <input type="text" placeholder='CPF' onChange={e => setCPF(e.target.value)} />
              </div>
              <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" placeholder='CEP' onChange={e => setCEP(e.target.value)} />
              </div>
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="text" placeholder='Telefone' onChange={e => setTelefone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" placeholder='Endereço' onChange={e => setEndereco(e.target.value)} />
              </div>
            </>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder='Senha' onChange={e => setPassword(e.target.value)} />
          </div>
          <button>{isRegistering ? 'Cadastrar' : 'Login'}</button>
          <p>
            {isRegistering ? 'Já tem uma conta? ' : 'Não tem uma conta? '}
            <span  onClick={() => setIsRegistering(!isRegistering)} className='cadastrar'>
              {isRegistering ? 'Login' : 'Cadastrar'}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
