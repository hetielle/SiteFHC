import React from "react";
import { Link } from "react-router-dom";
import './style/Noticias.css';
import AlbumBebes from "./AlbumBebes";

const Noticias = () => {

    return (
      <section className="container-noticias-home">
        
        <h2>Notícias</h2>
        <hr />

        <div className="container-noticias">
          <article className="container-noticia-home">

            <h3>Notícia</h3>
            {/* <img src="" alt=""/> */}
            <div className="img-noticia">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et, magni odit recusandae nihil cum laudantium ullam expedita minima illum tempore nisi. Ad id doloribus iusto, animi ex eius quis.</p>
            <Link to={""} className="btn btn-black btn-noticia">Ler mais</Link>

          </article>

          <article className="container-noticia-home">

            <h3>Notícia</h3>
            {/* <img src="" alt=""/> */}
            <div className="img-noticia">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et, magni odit recusandae nihil cum laudantium ullam expedita minima illum tempore nisi. Ad id doloribus iusto, animi ex eius quis.</p>
            <Link to={""} className="btn btn-black btn-noticia">Ler mais</Link>

          </article>

          <article className="container-noticia-home">

            <h3>Notícia</h3>
            {/* <img src="" alt=""/> */}
            <div className="img-noticia">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et, magni odit recusandae nihil cum laudantium ullam expedita minima illum tempore nisi. Ad id doloribus iusto, animi ex eius quis.</p>
            <Link to={""} className="btn btn-black btn-noticia">Ler mais</Link>

          </article>
        </div>

        <Link to={""} className="btn btn-noticia">Ver mais notícias</Link>

        <AlbumBebes/>
      </section>
    )
  }
   
  export default Noticias