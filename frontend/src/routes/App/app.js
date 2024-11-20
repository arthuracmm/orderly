import React from 'react';
import './app.css'
import MainHeader from "../../Components/mainHeader/mainHeader";
import NewPosts from "../../Components/newPosts/newPosts";
import Banner from '../../Components/banner/banner';



function App() {

  return (
    <div>
      <MainHeader />

      <main>
          <Banner/>
          <NewPosts/>
      </main>
      <div className='footerzao'>
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
    </div>
  );
}

export default App;
