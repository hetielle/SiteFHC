import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style/ouvidoria/Ouvidoria.css";
import "./style/ouvidoria/OuvidoriaSmartphone.css";

const Ouvidoria = () => {
  
  AOS.init();

    return (
      <React.Fragment>

        <Header/>

        <div className="container-titulo animate__animated animate__fadeInLeft">
          <h1 className="animate__animated animate__fadeInDown">Sua opinião é muito importante para nós!</h1>
          <hr/>
        </div>

        <section className="container-contatos animate__animated animate__fadeInUp">

          <div className="container-telefones animate__animated animate__fadeInLeft">

            <h2 className="bold">Fale conosco por telefone</h2>
            <br/>

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
          </div>

          

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13852.188908161348!2d-51.1486605!3d-29.7762759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196858316903d3%3A0x21721f602a8df503!2zRnVuZGHDp8OjbyBIb3NwaXRhbCBDZW50ZW7DoXJpbw!5e0!3m2!1spt-BR!2sbr!4v1709761702279!5m2!1spt-BR!2sbr"
          width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mapa-hospital" className="animate__animated animate__fadeInRight"></iframe>

        </section>

       

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