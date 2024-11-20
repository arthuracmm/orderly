import React from 'react';
import './SobrePage.css'; 
import MainHeader from '../../Components/mainHeader/mainHeader.js';
import pablo from '../../images/pablo.png';
import hugo from '../../images/hugo.png';
import vitor from '../../images/vitor.png';
import acm from '../../images/acm.png';

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
            <div className='title-2nd'>
            <h1>EQUIPE DE PROGRAMADORES</h1>
            </div>
            <div className='programadores'>
                <div className='programadores-itens'>
                    <img className='fotos' alt="pablo.png" src={pablo}/>

                </div>
                <div className='programadores-itens'>
                <img className='fotos' alt="hugo.png" src={hugo}/>
                    
                </div>
                <div className='programadores-itens'>
                <img className='fotos' alt="acm.png" src={acm}/>
                    
                </div>
                <div className='programadores-itens'>
                <img className='fotos' alt="vitor.png" src={vitor}/>
                    
                </div>
            </div>
        </div>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center', fontSize: '14px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Ecommerly - Projeto Interdisciplinar</p>
        <p style={{ margin: '5px 0' }}>Faculdade de Tecnologia de Franca "Dr. Thomaz Novelino"</p>
        <p style={{ margin: '5px 0' }}>Curso de Tecnologia em Desenvolvimento de Software Multiplataforma</p>
        <p style={{ margin: '10px 0' }}>
          Desenvolvido por:
          <br />
          Arthur Cesar Sousa Marcelino • Hugo de Castro Rodrigues • Pablo Miguel Sousa Nobrega • Vitor Siqueira Simeão
        </p>
        <p style={{ margin: '5px 0' }}>Ano: 2024</p>
        <hr style={{ border: '0', borderTop: '1px solid #555', margin: '15px 0' }} />
        <p style={{ margin: '0' }}>&copy; 2024 Ecommerly. Todos os direitos reservados.</p>
      </div>
    </footer>
        </div>
    );
};

export default SobrePage;
