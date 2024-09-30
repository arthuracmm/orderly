import React from 'react';
import './SobrePage.css'; 
import MainHeader from '../../Components/mainHeader/mainHeader.js';

const SobrePage = () => {
    return (
        <div>
            <MainHeader />
            <div className='container'>

            
            <div className='title'>
            <h1>
                SOBRE ECOMMERLY
            </h1>
            </div>
           
            <div className='content'>
                <div className='text-content'>
                <p>
                O projeto Ecommerly consiste no desenvolvimento de uma plataforma de
delivery e e-commerce voltada para a comercialização de alimentos e bebidas. O
objetivo do sistema é proporcionar aos usuários uma forma rápida e eficiente de
encomendar refeições e bebidas diretamente de restaurantes e
estabelecimentos parceiros, com funcionalidades que incluem: Catálogo de
Produtos, Sistema de Carrinho de Compras e Pagamento, Administração e Gestão
de Pedidos
O Ecommerly proporciona aos alunos a prática de tecnologias atuais e o
desenvolvimento de competências essenciais no desenvolvimento de software,
como a colaboração em equipe e o planejamento de projetos reais.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SobrePage;
