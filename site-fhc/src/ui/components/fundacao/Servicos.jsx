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

        <img src={servicos} alt="Serviços do Hospital" className="img-servicos"/>

        <p>Serviços disponibilizados pela Fundação Hospital Centenário:</p>
        <h4>Porta de Entrada Hospitalar de Urgência (PEHU) - Hospital Especializado Tipo I:</h4>
        <p>A PEHU atua como a primeira linha de cuidados para pacientes em estado de urgência, oferecendo atendimento médico imediato e encaminhamentos para outros serviços conforme necessário.</p>

        <h4>Unidade de Assistência de Alta Complexidade em Nefrologia (Serviço de Nefrologia):</h4>
        <p>Esta unidade fornece tratamento especializado para pacientes com doenças renais complexas, incluindo hemodiálise, diálise peritoneal e acompanhamento clínico.</p>

        <h4>Unidade de Assistência de Alta Complexidade em Oncologia (UNACON) com serviço de Radioterapia:</h4>
        <p>A UNACON oferece tratamento abrangente para pacientes com câncer, incluindo quimioterapia, radioterapia e cuidados de suporte.</p>

        <h4>Unidade de Assistência de Alta Complexidade em Terapia Nutricional - Enteral:</h4>
        <p>Essa unidade se dedica ao manejo nutricional de pacientes que requerem alimentação enteral, garantindo uma abordagem especializada e segura.</p>

        <h4>Centro de Atendimento de Urgência tipo III aos pacientes com AVC:</h4>
        <p>Este centro proporciona atendimento especializado e rápido para pacientes que sofrem de Acidente Vascular Cerebral (AVC), visando a minimizar danos e promover a recuperação.</p>

        <h4>Oncologia cirúrgica hospital porte B:</h4>
        <p>Oferece procedimentos cirúrgicos avançados para o tratamento de pacientes oncológicos, visando a remoção de tumores e o tratamento de complicações associadas.</p>

        <h4>Especialidade Clínica para pacientes internados:</h4>
        <ul>
          <li>Clínica Geral;</li>
          <li>Cardiologia;</li>
          <li>Oncologia;</li>
          <li>Neurologia;</li>
          <li>Traumatologia;</li>
          <li>Urologia;</li>
        </ul>

        <h4>Complementar:</h4>
        <ul>
          <li>UTI Neonatal - Tipo II;</li>
          <li>Unidade de Isolamento;</li>
          <li>Unidade Intermediária Neonatal;</li>
          <li>Unidade Intermediária;</li>
          <li>UTI Adulto - Tipo II;</li>
        </ul>

        <h4>Obstétrico:</h4>
        <ul>
          <li>Obstetrícia Clínica;</li>
          <li>Obstetrícia Cirúrgica;</li>
        </ul>

        <h4>Pediatria:</h4>
        <ul>
          <li>Pediatria Clínica;</li>
          <li>Pronto Socorro Pediátrico</li>
        </ul>

        <p>Dentre as especialidades atendidas no Hospital, destacam-se as especialidades básicas de Clínica Médica, Gineco-obstetrícia, Pediatria e Cirurgia Geral.</p>

        <Link data-aos="zoom-in" to={"https://grp.saoleopoldo.rs.gov.br/transparencia/portal/#/"} target="_blank" rel="noreferrer" className="btn">Ir para o Portal da Transparência</Link>
      </div>
    </section>
  )
}

export default Servicos;
