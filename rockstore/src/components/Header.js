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
            <p>Sua loja de confiança para os melhores eletrônicos. Oferecemos uma vasta seleção de produtos de última geração, desde smartphones e laptops até acessórios e gadgets inovadores. Aproveite nossas ofertas exclusivas e descubra o que há de mais novo no mundo da tecnologia!
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
 