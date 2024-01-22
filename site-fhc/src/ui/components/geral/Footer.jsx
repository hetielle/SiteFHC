import React from "react";
import './Footer.css';

const Footer = () => {

    return (
      <footer>

        <div className="container-dados-redes-footer">

          <div className="container-dados-footer">
              <h2>Fundação Hospital Centenário</h2>
              <p>Avenida Theodomiro Porto da Fonseca, 799, Bairro Fião</p>
              <p>São Leopoldo, RS</p>
              <p>CEP 93.020-645</p>
              <p>Fone: (51) 3591-1400</p>
              <p>administracao@hospitalcentenario.rs.gov.br</p>
          </div>
          
          <div className="container-redes-footer">
              <h3>Siga-nos nas redes</h3>
              {/* imagens */}
          </div>
          
        </div>

        <p id="copyright">© COPYRIGHT 2024 FUNDAÇÃO HOSPITAL CENTENÁRIO</p>

      </footer>
    )
  }
   
  export default Footer  