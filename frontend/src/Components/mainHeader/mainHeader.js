  import './mainHeader.css'
  import userIcon from '../../images/svg/user.svg'
  import searchicon from '../../images/svg/search.svg'
  import { Link } from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';

  const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter(produtos => 
        produtos.title.toLowerCase().includes(query.toLowerCase()))
};

  function MainHeader() {
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleFocus = () => {
        setIsVisible(true);
    };

    const handleBlur = (event) => {
      // Adiciona um pequeno atraso para o clique no item
      setTimeout(() => {
          if (event.relatedTarget && event.relatedTarget.closest('#minhaDiv')) {
              return; // Não faz nada se o clique foi dentro da div
          }
          setIsVisible(false);
      }, 100); // Ajuste o tempo conforme necessário
    };

    useEffect(() => {
      const fetchItems = async () => {
          try {
              const response = await axios.get('http://localhost:5000/produtos');
              console.log(response.data);
              if (Array.isArray(response.data)) {
                  setItems(response.data);
              } else {
                  console.error("A resposta não contém um array de produtos");
                  setItems([]);
              }
          } catch (error) {
              console.error("Erro ao buscar os itens:", error);
              setItems([]);
          }
      };
  
      fetchItems();
  }, []);
  const filteredItems = getFilteredItems(query, items || []);

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
            <img src={searchicon} alt='search'/>
            <input type='text' className='header-search-input' value={query} onChange={(e) => setQuery(e.target.value)} onFocus={handleFocus} 
            onBlur={handleBlur} />
            {isVisible && (
            <ul className='searchMap'>
              {filteredItems.map(value => <p key={value.id} onClick={() => navigate(`/produtos/${value.id}`)} >{value.title}</p>)}
            </ul>
            )}
          </div>

          <div className="main-header-items">
            <ul>
             
              <li>
              <Link to="/cart" className="header-link">
                <p>Carinho</p>
              </Link>
              </li>
              <Link to="/sobre" className="header-link">
                  <p>Sobre</p>
              </Link>
              <li>
              <Link to="/myprofile" className="header-link">
                <img src={userIcon} alt='user'></img>
              </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }

  export default MainHeader;