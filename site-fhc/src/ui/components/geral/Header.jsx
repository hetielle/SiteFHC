import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {

    return (
      <header>

        <img src="" alt="Logo" />

        <nav>
          <Link to={"/fundacao"}>Fundação</Link>
          <Link to={"/fundacao"}>Notícias</Link>
          {/* Add dropdown menu */}
        </nav>

      </header>
    )
  }
   
  export default Header  