import React from "react";
import './style/footer/Footer.css';
import './style/footer/FooterSmartphone.css';
import { Link } from 'react-router-dom';
import facebook from './img/facebook.webp';
import instagram from './img/instagram.webp';
import logoPrefa from './img/logoPrefa.webp';

const Footer = () => {

  let ano = new Date().getFullYear();

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

              <img src={logoPrefa} alt="Logo da prefeitura de São Leopoldo"/>
          </div>
          
          <div className="container-redes-footer">

              <h3>Siga-nos nas redes</h3>

              <div className="container-img-redes">
                <Link  to={"https://www.facebook.com/FHCSL/"} target="_blank" className="link-redes">
                  <img src={facebook} alt="Link Facebook" className="img-redes-facebook"/>
                </Link>

                <Link to={"https://www.instagram.com/fhcsl/"} target="_blank" className="link-redes">
                  <img src={instagram} alt="Link Instagram" className="img-redes-instagram"/>
                </Link>
              </div>

          </div>
          
        </div>

        <p id="copyright">© COPYRIGHT {ano} FUNDAÇÃO HOSPITAL CENTENÁRIO</p>

      </footer>
    )
  }
   
  export default Footer  