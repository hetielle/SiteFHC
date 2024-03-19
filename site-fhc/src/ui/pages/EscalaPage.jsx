import React from "react";
import { useParams } from 'react-router-dom';
import Escala from "../components/escalas/Escala";

const EscalaPage = () => {

  const { nomeEspecialidade } = useParams();

  return (
    <React.Fragment>
        <Escala nomeEspecialidade={nomeEspecialidade}/>
    </React.Fragment>
  )
}
 
export default EscalaPage
