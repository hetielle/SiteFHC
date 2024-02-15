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

      <nav className="navbar">
        <ul>
          
          <li>
            <Link to={"/fundacao"} className={activePage === '/fundacao' ? 'link active-page' : 'link'}>Fundação</Link>
          </li>
          <li>
            <Link to={"/fundacao"} className={activePage === '/fundacao' ? 'link active-page' : 'link'}>Escalas</Link>
          </li>
          <li>
            <Link to={"/noticias"} className={activePage === '/noticias' ? 'link active-page' : 'link'}>Notícias</Link>
          </li>
          <li className="">
            <a href="#" className="link" id="fale-conosco"> Fale Conosco ⏷</a>
            <ul className="">
              <li className="dropdown" id="ouvidoria">
                <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Contato e Ouvidoria</Link>
              </li>
              <li className="dropdown">
                <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Pacientes não identificados</Link>
              </li>
              <li className="dropdown">
                <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Processo seletivo</Link>
              </li>
              <li className="dropdown">
                <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Programa de estágio</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/"} id="home" className={activePage === '/' ? 'link active-page' : 'link'}>Página Inicial</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
   
export default Header  