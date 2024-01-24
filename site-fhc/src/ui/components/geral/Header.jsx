import React from "react";
import { Link } from 'react-router-dom';
import './style/Header.css';
import logo from './img/logo.png';

const Header = () => {

    return (
      <header>

        <Link to={"/"}>
          <img src={logo} alt="Logo"/>
        </Link>

        <ul>
          <li>
            <Link to={"/ouvidoria"} className="link">Fale Conosco</Link>
          </li>
          <li>
            <Link to={"/fundacao"} className="link">Fundação</Link>
          </li>
          <li>
            <Link to={"/noticias"} className="link">Notícias</Link>
            {/* Add dropdown menu */}
          </li>
          
        </ul>

      </header>
    )
  }
   
  export default Header  