  import './mainHeaderADM.css'
  import { Link } from "react-router-dom";


  function MainHeaderADM() {
    return (
      <div className="header">
        <header className="main-header">
          <div className="main-header-logo">
          <div className='header-link'>
          <Link to="/" className="header-link">
          <h1 className='header-link2'>Ecommerly</h1>
          </Link>
          </div>
          </div>
          <Link to="/addpost" >
          <button className='header-link3'>
            Adicionar produtos
          </button>
          </Link>
        </header>
      </div>
    );
  }

  export default MainHeaderADM;