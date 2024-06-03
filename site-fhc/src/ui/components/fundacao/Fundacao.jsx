import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import Historia from "../fundacao/Historia";
import Direcao from "./Direcao";
import Servicos from "./Servicos";
import 'animate.css';
import "./style/fundacao/Fundacao.css";
import "./style/fundacao/FundacaoSmartphone.css";
import frenteHospital from './img/frenteHospital.webp';

const Fundacao = () => {

    return (
      <React.Fragment>

        <Header/>

        <section className="container-fundacao">

          <div data-aos="zoom-in" className="container-conteudo-fundacao">
            <h1 data-aos="zoom-in">A Fundação</h1>
            <hr data-aos="zoom-in"/>
            <p data-aos="zoom-in">A Fundação Hospital Centenário de São Leopoldo é um hospital geral municipal, 100% SUS e especializado em cuidar de vidas. Possuímos 224 leitos, sendo que 198 desses existem exclusivamente para o Sistema Único de Saúde.</p>

            <p data-aos="zoom-in">Contamos ainda com 10  leitos de UTI Adulto, 10 leitos de UTI Neonatal e 06 leitos de UCI Neonatal, conforme Cadastro Nacional de Estabelecimentos de Saúde - CNES, que são atendidos por 905.</p>

            <p data-aos="zoom-in">A instituição está localizada no município de São Leopoldo, componente da Macrorregião Metropolitana - Região de Saúde n° 07 - Vale do Sinos, do Estado do Rio Grande do Sul.</p>
          </div>

            <img data-aos="zoom-in" src={frenteHospital} alt="Foto Atual do Hospital"/>
          
        </section>

        <Historia />

        <Direcao/>

        <Servicos/>

        <Footer/>
        
      </React.Fragment>
    )
  }
   
  export default Fundacao  