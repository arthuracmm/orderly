import './mainHeader.css'
import userIcon from '../../images/svg/user.svg'
import search from '../../images/svg/search.svg'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import axios from "axios"



function MainHeader() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
      axios.get("http://localhost:5000/cart")
      .then((res) => {
      setProducts(res.data)
      })
      .catch(() => {
      console.log('Deu errado')
      })
  }, [])

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <header className="main-header">
        <div className="main-header-logo">
        <div className='header-link'>
        <h1 className='header-link2' onClick={handleLogoClick}
        >Ecommerly</h1>
        </div>
    
        </div>

        <div className='main-header-search'>
          <img src={search} alt='search'/>
          <input type='text' className='header-search-input'/>
        </div>

        <div className="main-header-items">
          <ul>
            <li>
              <p>Produtos</p>
            </li>
            <li>
            <Link to={{pathname: `/cart/${products.id}`}} className="header-link">
              <p>Carinho</p>
            </Link>
            </li>
            <Link to="/sobre" className="header-link">
                <p>Sobre</p>
            </Link>
            <li>
              <img src={userIcon} alt='user'></img>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;