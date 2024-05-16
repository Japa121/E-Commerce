import {
    faSearch,
    faShoppingBag, 
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
       <div className="inner-content">
       <h1 className="Logo">
        ROCK<span>STORE</span>
       </h1>
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Produtos</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/account">Conta</Link>
          </li>
        </ul>
       </nav>
       <div className="navs-icon-container">
        <div className="search-input-container">
          <input type="search" placeholder="Procurar"/>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className="shopping-bag">
          <FontAwesomeIcon icon={faShoppingBag} />
          <div className="products-count">15</div>
        </button>
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
       </div>
      </div>
    </div>
  )
}
