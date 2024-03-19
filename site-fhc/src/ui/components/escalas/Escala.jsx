import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import PDFEscala from "./PDFEscala";
import "../escalas/style/escala/Escala.css";

const Escala = ({nomeEspecialidade}) => {

    return(
        <React.Fragment>
            <Header/>

            <div className="container-titulo-escala">

                <h1>Escalas Médicas</h1>
                <hr/>
                
            </div>
            
            <PDFEscala nomeEspecialidade={nomeEspecialidade}/>

            <Footer/>
        </React.Fragment>
    )
}

export default Escala