import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe nosso aplicativo</p>
          <p>Baixe nosso aplicativo para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store donwload" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="Logo">
            ROCK<span>STORE</span>
          </h1>
          <p>
            Nosso objetivo é ajudar pessoas comuns a se tornarem Desenvolvedores
            Web Pro Max
          </p>
        </div>

        <div className="links">
          <h3>Links Utéis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Politicas do Site</Link>
            </li>
            <li>
              <Link to="/">Torne-se</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-inner-content">
        <hr />

        <p className="Copyright">
          Copyright 2030 - Victor dos Santos - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
