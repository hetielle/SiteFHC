import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style/ouvidoria/Ouvidoria.css";
import "./style/ouvidoria/OuvidoriaSmartphone.css";
import imgOuvidoria from "../ouvidoria/img/ouvidoria.png";

const Ouvidoria = () => {
  
  AOS.init();

    return (
      <React.Fragment>

        <Header/>

        <div className="container-grupo-ouvidoria">
          <div className="container-left-ouvidoria">
            <div className="container-titulo animate__animated animate__fadeInLeft">
              <h1 className="animate__animated animate__fadeInDown">Sua opinião é muito importante para nós!</h1>
              <hr/>
            </div>

            <section className="container-contatos animate__animated animate__fadeInUp">

              <h2 className="bold">Fale conosco por telefone</h2>
              <h2 className="animate__animated animate__fadeInUp" id="telefone">3591-1400</h2>

            </section>
          </div>

          <div className="container-right-ouvidoria animate__animated animate__fadeInRight">
            <img src={imgOuvidoria} alt="Desenho de pessoa em ligação"/>
          </div> 
        </div>      

        <section data-aos="fade-up" className="container-ouvidoria">

          <h2 data-aos="zoom-in">Ou envie uma mensagem</h2>
          
          <form>

            <select data-aos="fade-up" className="" name="">
              <option value="" disabled selected>Setor</option>
              <option value="0">Administração</option>
              <option value="1">Concurso</option>
              <option value="2">Ouvidoria</option>
              <option value="3">Recursos Humanos</option>
            </select>

            <input data-aos="fade-up" type="text" placeholder="Nome"/>

            <input data-aos="fade-up" type="email" placeholder="Email"/>

            <input data-aos="fade-up" type="tel" placeholder="Telefone (DDD + número)"/>

            <input data-aos="fade-up" type="text" placeholder="Assunto"/>

            <textarea data-aos="fade-up" cols="30" rows="10" placeholder="Mensagem"></textarea>

            <input data-aos="zoom-in" type="submit" className="btn"/>
          </form>
        </section>


        <Footer/>
        
      </React.Fragment>
    )
  }
   
  export default Ouvidoria  