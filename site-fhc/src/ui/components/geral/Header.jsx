import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/header/Header.css';
import './style/header/HeaderSmartphone.css';
import logo from './img/logo.png';

const Header = () => {

  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const currentUrl = window.location.pathname;
    setActivePage(currentUrl);
  }, []);

  return (
    <header>

      <Link to={"/"}>
        <img src={logo} alt="Logo"/>
      </Link>

      <ul>
        <li className="dropdown">
          <a href="#" className="link"> Fale Conosco</a>
          <ul className="submenu">
            <li>
              <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Contato e Ouvidoria</Link>
            </li>
            <li>
              <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Pacientes não identificados</Link>
            </li>
            <li>
              <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Processo seletivo</Link>
            </li>
            <li>
              <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Programa de estágio</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/fundacao"} className={activePage === '/fundacao' ? 'link active-page' : 'link'}>Fundação</Link>
        </li>
        <li>
          <Link to={"/noticias"} className={activePage === '/noticias' ? 'link active-page' : 'link'}>Notícias</Link>
          {/* Add dropdown menu */}
        </li>
        <li>
          <Link to={"/"} id="home" className={activePage === '/' ? 'link active-page' : 'link'}>Página Inicial</Link>
        </li>
      </ul>

    </header>
  )
}
   
export default Header  