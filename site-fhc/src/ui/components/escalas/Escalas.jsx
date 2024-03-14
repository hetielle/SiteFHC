import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import "../escalas/style/escalas/Escalas.css";
import Especialidades from "./Especialidades";

const Escalas = () => {

    return(
        <React.Fragment>
            <Header/>

            <div className="container-titulo-escalas">

                <h1>Escalas Médicas</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo possimus aperiam nostrum perspiciatis! Nesciunt voluptatem, expedita quod amet laborum iste dicta unde est, praesentium dolor nisi quis quia culpa.</p>
                
                <Especialidades/>

            </div>

            

            <Footer/>
        </React.Fragment>
    )
}

export default Escalas