import React from "react";
import "./style/direcao/Direcao.css";
import "./style/direcao/DirecaoSmartphone.css";

const Direcao = () => {

    return (
      <section className="container-direcao">

        <div className="container-conteudo-direcao">
          <h1>Direção</h1>
          <hr/>

          <p>Presidente: Nestor Pedro Schwertner</p>
          <p>Vice-presidente Financeiro: Clairton Rodrigues da Fé</p>
          <p>Vice-presidente Administrativo: Aguinaldo Cavedon</p>
          <p>Vice-presidente de Operações: Gisele da Rosa Vieira</p>
          <p>Diretor Técnico Médico: João Marcelo Vieira Goulart</p>
          <p>Procuradora-Geral: Fernando Cordeiro da Silva</p>
        </div>

        <div className="container-img">
          <img src="" alt="Direção do Hospital" />
        </div>

      </section>
    )
  }
   
  export default Direcao  