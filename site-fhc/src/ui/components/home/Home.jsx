import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import Noticias from "./Noticias";
import { Link } from "react-router-dom";
import 'animate.css';
import './style/home/Home.css';
import './style/home/HomeSmartphone.css';
import imagemHome from './img/imagemHome.webp';

const Home = () => {

    return (
      <React.Fragment>
        
        <Header/>
        <div className="container-pesquisa-home">
          <h1 className="animate__animated animate__slideInDown">HOSPITAL PÚBLICO <br/>100% SUS</h1>
        </div>

        <Noticias/>

        <section className="container-intro-home">

          <div data-aos="fade-right" className="container-fundacao-home">            
          
            <h2 data-aos="fade-down">A Fundação</h2>
            <hr data-aos="fade-up"/>

            <p>A Fundação Hospital Centenário de São Leopoldo é um hospital geral municipal, 100% SUS e especializado em cuidar de vidas.</p>

            <p>Possuímos 255 leitos, sendo que desses 16 são leitos de UTI Adulto, 10 leitos de UTI Neonatal e 06 leitos de UCI Neonatal, conforme Cadastro Nacional de Estabelecimentos de Saúde - CNES.</p>

            <p id="p2">A instituição está localizada no município de São Leopoldo, componente da Macrorregião Metropolitana - Região de Saúde n° 07 - Vale do Sinos, do Estado do Rio Grande do Sul.</p>

            <Link data-aos="zoom-in" to={"/fundacao"} className="btn">Saber mais</Link>
          </div>

          <div className="container-doacao-home">

            <img data-aos="zoom-in" src={imagemHome} alt="Imagem manifestação corte de verbas FHC"/>

            <div data-aos="zoom-in" className="container-doacao-conteudo-home">
              <h2>Salve vidas sendo um doador!</h2>
              <Link data-aos="zoom-in" to={"/doacao"} className="btn btn-white">Saber mais</Link>
            </div>

          </div>

        </section>
        
        <Footer/>

      </React.Fragment>
    )
  }
   
  export default Home  