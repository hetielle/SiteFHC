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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo possimus aperiam nostrum perspiciatis! Nesciunt voluptatem, expedita quod amet laborum iste dicta unde est, praesentium dolor nisi quis quia culpa.</p>
                
                <Especialidades/>

            </div>


            <Footer/>
        </React.Fragment>
    )
}

export default Escalas