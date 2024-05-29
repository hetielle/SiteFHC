import { Link } from "react-router-dom";
import "./style/servicos/Servicos.css";
import "./style/servicos/ServicosSmartphone.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import servicos from './img/servicos.webp';

const Servicos = () => {

  AOS.init();
  
    return (
      <section className="container-servicos">

        <div data-aos="zoom-in" className="container-conteudo-servicos">
          <h1 data-aos="zoom-in">Serviços</h1>
          <hr data-aos="zoom-in"/>

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

          <Link data-aos="zoom-in" to={"https://grp.saoleopoldo.rs.gov.br/transparencia/portal/#/"} target="_blank" rel="noreferrer" className="btn">Ir para o Portal da Transparência</Link>
        </div>

          <img data-aos="zoom-in" src={servicos} alt="Serviços do Hospital" />
            
      </section>
        
    )
  }
   
  export default Servicos  