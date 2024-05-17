import {
  faSearch,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="Logo">
          ROCK<span>STORE</span>
        </h1>
        <nav className={`${show && "show"}`}>
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
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button className="shopping-bag">
            <FontAwesomeIcon icon={faShoppingBag} />
            <div className="products-count">0</div>
          </button>
          <button className="menu-button"onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
