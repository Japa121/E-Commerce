import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
  
  <header>
    <div className="inner-content">
        <div className="Left-side">
            <h2>Adquira um novo estilo ao seu trabalho</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis maxime quos praesentium, hic quisquam debitis dolore laborum voluptatum fugiat deserunt sed, iusto nisi modi ad nam voluptatibus velit? Fugiat.
            </p>
            <Link to="/products" className="see-more-btn" >
                <span>Ver Agora</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
        </div>
        <div className="Right-side">
            <img src="/images/header-image.png" alt="products" />
        </div>
    </div>
  
    </header>
  )
}
 