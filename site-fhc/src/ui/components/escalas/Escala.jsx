import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import PDFEscala from "./PDFEscala";
import "../escalas/style/escala/Escala.css";

const Escala = () => {

    return(
        <React.Fragment>
            <Header/>

            <div className="container-titulo-escalas">

                <h1>Escalas Médicas</h1>
                <hr/>
                
                <PDFEscala/>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Escala