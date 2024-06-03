import React from 'react';
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import 'animate.css';
import "../escalas/style/escalas/Escalas.css";
import "../escalas/style/escalas/EscalasSmartphone.css";
import Especialidades from "./Especialidades";


export const Escalas = () => {

    return(
        <React.Fragment>
            <Header/>

            <div className="container-titulo-escalas animate__animated animate__fadeInLeft">

                <h1 className='animate__animated animate__fadeInDown'>Escalas Médicas</h1>
                <hr/>
                <p>Nesta seção você encontra arquivos PDF com as escalas médicas mensais referentes a cada uma das especialidades que disponibilizamos (você pode ler mais sobre nossos serviços <a href="http://localhost:3000/fundacao#:~:text=Cordeiro%20da%20Silva-,Servi%C3%A7os,-Servi%C3%A7os%20disponilizados%20pela">aqui</a>). Assim, você consegue saber qual médico poderá realizar seu atendimento!</p>
                
                <Especialidades/>

            </div>


            <Footer/>
        </React.Fragment>
    )
}

export default Escalas