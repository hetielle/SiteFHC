import React from "react";
import { Link } from "react-router-dom";
import './style/noticias/Noticias.css';
import './style/noticias/NoticiasSmartphone.css';
import AlbumBebes from "./AlbumBebes";
import Posts from "./Posts";

const Noticias = () => {

    return (
      <section className="container-noticias-home">
        
        <h2 data-aos="fade-up">Notícias</h2>
        <hr data-aos="fade-up"/>

        <div>
          <Posts/>
        </div>

        <Link data-aos="fade-up" to={""} className="btn btn-noticia">Ver mais notícias</Link>

        <AlbumBebes/>
      </section>
    )
  }
   
export default Noticias