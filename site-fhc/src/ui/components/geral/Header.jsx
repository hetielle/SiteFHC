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
        <li>
          <Link to={"/ouvidoria"} className={activePage === '/ouvidoria' ? 'link active-page' : 'link'}>Fale Conosco</Link>
        </li>
        <li>
          <Link to={"/fundacao"} className={activePage === '/fundacao' ? 'link active-page' : 'link'}>Fundação</Link>
        </li>
        <li>
          <Link to={"/noticias"} className={activePage === '/noticias' ? 'link active-page' : 'link'}>Notícias</Link>
          {/* Add dropdown menu */}
        </li>
          
      </ul>

    </header>
  )
}
   
export default Header  