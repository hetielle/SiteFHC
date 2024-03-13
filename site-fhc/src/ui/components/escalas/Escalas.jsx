import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import { Link } from "react-router-dom";
import "../escalas/style/Escalas.css";

const Escalas = () => {
    return(
        <React.Fragment>
            <Header/>

            <div className="container-titulo-escalas">

                <h1>Escalas Médicas</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo possimus aperiam nostrum perspiciatis! Nesciunt voluptatem, expedita quod amet laborum iste dicta unde est, praesentium dolor nisi quis quia culpa.</p>
                
            </div>

            <div className="container-especialidades">

                <div className="container-especialidades-left">
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                </div>

                <div className="container-especialidades-right">
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                    <Link className="btn">Especialidade</Link>
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Escalas