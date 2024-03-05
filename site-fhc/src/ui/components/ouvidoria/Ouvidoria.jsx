import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import "./style/ouvidoria/Ouvidoria.css";
import "./style/ouvidoria/OuvidoriaSmartphone.css";

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

          <p className="bold">O que você está procurando?</p>
          
          <div className="container-telefone">
            <p className="bold">Central de atendimento: </p>
            <p>3591-1400</p>
          </div>

          <p className="bold">Administração: </p>
          <p>Ramal 430</p>

          <p className="bold">Recursos Humanos: </p>
          <p>Ramais 520/521/530</p>

          <p className="bold">Comunicação: </p>
          <p>Ramal 425</p>

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