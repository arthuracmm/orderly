import './mainHeader.css'
import userIcon from '../../images/svg/user.svg'
import search from '../../images/svg/search.svg'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function MainHeader() {
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