import React from "react"
import { Link } from "react-router-dom"

const Servicos = () => {

    return (
      <React.Fragment>

        <section>

            <h1>Serviços</h1>

            <img src="" alt="Serviços do Hospital" />

            <p>Serviços disponilizados pela Fundação Hospital Centenário</p>
            <ul>
                <li>Porta de Entrada Hospitalar de Urgência (PEHU) - Hospital Especializado Tipo I;</li>
                <li>Unidade de Assistência de Alta Complexidade em Nefrologia (Serviço de Nefrologia);</li>
                <li>Unidade de Assistência de Alta Complexidade em Oncologia (UNACON) com serviço de Radioterapia;</li>
                <li>Unidade de Assistência de Alta Complexidade em Terapia Nutricional - Enteral;</li>
                <li>Centro de Atendimento de Urgência tipo III aos pacientes com AVC;</li>
                <li>Oncologia cirúrgica hospital porte B;</li>
                <li>Especialidade Clínica para pacientes internados: Clínica Geral; Cardiologia; Oncologia; Neurologia; Traumatologia; Urulogia;</li>
                <li>Complementar: UTI Neonatal - Tipo II; Unidade de Isolamento; Unidade Intermediária Neonatal; Unidade Intermediária; UTI Adulto - Tipo II;</li>
                <li>Obstétrico: Obstetrícia Clínica; Obstetrícia Cirúrgica;</li>
                <li>Pediatria: Pediatria Clínica;</li>
                <li>Dentre as especialidades atendidas no Hospital, destacam-se as especialidades básicas de Clínica Médica, Gineco-obstetrícia, Pediatria e Cirurgia Geral.</li>
            </ul>

            <button><Link to={""}>Ir para o portal de transparência</Link></button>
            
        </section>
        
      </React.Fragment>
    )
  }
   
  export default Servicos  