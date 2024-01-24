import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import "./style/Ouvidoria.css";

const Ouvidoria = () => {

    return (
      <React.Fragment>

        <Header/>

        <div className="container-titulo">
          <h1>Sua opinião é muito importante para nós!</h1>
          <hr/>
        </div>

        <section className="container-contatos">

          <h2>Fale conosco por telefone</h2>
          
          <div className="container-telefone">
            <p className="bold">Telefone:</p>
            <p>3591-1400</p>
          </div>

          <p className="bold">Ramais:</p>
          <p>430 - Administração</p>
          <p>520/521/530 - Recursos Humanos</p>

        </section>

        <section className="container-ouvidoria">

          <h2>Ou envie uma mensagem</h2>
          
          <form>

            <select className="" name="">
              <option value="" disabled selected>Setor</option>
              <option value="0">Administração</option>
              <option value="1">Concurso</option>
              <option value="2">Ouvidoria</option>
              <option value="3">Recursos Humanos</option>
            </select>

            <input type="text" placeholder="Nome"/>

            <input type="email" placeholder="Email"/>

            <input type="tel" placeholder="Telefone (DDD + número)"/>

            <input type="text" placeholder="Assunto"/>

            <textarea cols="30" rows="10" placeholder="Mensagem"></textarea>

            <input type="submit" className="btn"/>
          </form>
        </section>


        <Footer/>
        
      </React.Fragment>
    )
  }
   
  export default Ouvidoria  