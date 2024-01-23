import { Link } from "react-router-dom";
import "./style/Servicos.css";

const Servicos = () => {

    return (

      <section className="container-servicos">

        <div className="container-conteudo-servicos">
          <h1>Serviços</h1>
          <hr/>

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

          <Link to={""} className="btn">Ir para o portal de transparência</Link>
        </div>

        <div className="container-img">
          <img src="" alt="Serviços do Hospital" />
        </div>
            
      </section>
        
    )
  }
   
  export default Servicos  