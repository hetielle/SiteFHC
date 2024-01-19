import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import Noticias from "./Noticias";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

    return (
      <React.Fragment>
        
        <Header/>
        <div className="container-pesquisa-home">
          <h1>Hospital Público 100% SUS</h1>
          <h2>Especializado em cuidar de vidas</h2>
          {/* barra de pesquisa */}
        </div>

        <section className="container-intro-home">

          <div className="container-fundacao-home">            
          
            <h2>A Fundação</h2>
            <hr/>

            <p>A Fundação Hospital Centenário de São Leopoldo (FHCSL) é um hospital geral, público e municipal, com 224 (duzentos e vinte e quatro) leitos, sendo 198 (cento e noventa e oito) exclusivamente para o Sistema Único de Saúde. Conta ainda com 10 (dez) leitos de UTI Adulto, 10 (dez) leitos de UTI Neonatal e 06 (seis) leitos de UCI Neonatal, conforme Cadastro Nacional de Estabelecimentos de Saúde - CNES, que são atendidos por 905.</p>

            <p id="p2">A instituição está localizada no município de São Leopoldo, componente da Macroregião Metropolitana - Região de Saúde n° 07 - Vale do Sinos, do Estado do Rio Grande do Sul.</p>

            <Link to={"/fundacao"} className="btn">Saber mais</Link>
          </div>

          <div className="container-doacao-home">
            {/* <img src="" alt="Médicos"/> */}

            <div className="img-medicos-home">
            </div>
            <div className="container-doacao-conteudo-home">
              <h2>Faça sua doação hoje!</h2>
              <Link to={"/doacao"} className="btn btn-white">Saber mais</Link>
            </div>

          </div>

        </section>

        <Noticias/>
        <Footer/>

      </React.Fragment>
    )
  }
   
  export default Home  