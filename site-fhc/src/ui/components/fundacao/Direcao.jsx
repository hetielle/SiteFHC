import React from "react";
import "./style/direcao/Direcao.css";
import "./style/direcao/DirecaoSmartphone.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import direcao from './img/direcao.jpeg';

const Direcao = () => {

  AOS.init();

    return (
      <section className="container-direcao">

        <div data-aos="zoom-in" className="container-conteudo-direcao">
          <h1 data-aos="zoom-in">Direção</h1>
          <hr data-aos="zoom-in"/>

          <p>Presidente: Nestor Pedro Schwertner</p>
          <p>Vice-presidente Financeiro: Clairton Rodrigues da Fé</p>
          <p>Vice-presidente Administrativo: Aguinaldo Cavedon</p>
          <p>Vice-presidente de Operações: Gisele da Rosa Vieira</p>
          <p>Diretor Técnico Médico: João Marcelo Vieira Goulart</p>
          <p>Procuradora-Geral: Fernando Cordeiro da Silva</p>
        </div>

          <img data-aos="zoom-in" src={direcao} alt="Direção do Hospital Centenário"/>

      </section>
    )
  }
   
  export default Direcao  