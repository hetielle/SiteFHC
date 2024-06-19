import React from "react";
import "./style/direcao/Direcao.css";
import "./style/direcao/DirecaoSmartphone.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import direcao from './img/direcao.jpeg';

const Direcao = () => {
  AOS.init();

  return (
    <section className="container-direcao">
      <div data-aos="zoom-in" className="container-conteudo-direcao">
        <h1 data-aos="zoom-in">Direção</h1>
        <hr data-aos="zoom-in"/>

        <img data-aos="zoom-in" src={direcao} alt="Direção do Hospital Centenário" className="img-direcao"/>

        <p>A direção de nosso hospital é formada por: presidente, vice-presidente financeiro, vice-presidente administrativo, vice-presidente de operações, diretor técnico médico e diretor técnico de enfermagem e procurador-geral.</p>
        <p>O presidente de um hospital, também conhecido como CEO, é responsável por supervisionar a administração diária, desenvolver e implementar estratégias e objetivos, garantir a qualidade e segurança dos cuidados, representar a instituição perante a comunidade, assegurar a conformidade legal e regulatória. Em essência, o presidente garante que o hospital opere de maneira eficiente, gerenciando os recursos de forma eficaz.</p>
        <p>O vice-presidente financeiro de um hospital é responsável por supervisionar todas as atividades financeiras da instituição. Suas funções incluem a gestão do orçamento, análise financeira, planejamento e controle de custos, supervisão de relatórios financeiros e auditorias, e desenvolvimento de estratégias para garantir a sustentabilidade econômica. Ele também gerencia fluxos de caixa, investimentos, financiamento e compliance financeira, colaborando com outros líderes para alinhar os objetivos financeiros com as metas estratégicas do hospital, garantindo a saúde financeira da organização.</p>
        <p>O vice-presidente administrativo de um hospital supervisiona as operações administrativas, garantindo eficiência em áreas como recursos humanos, finanças, TI, manutenção e logística. Ele desenvolve e implementa políticas administrativas, gerencia o orçamento, lidera equipes, assegura conformidade regulatória e colabora estreitamente com a liderança do hospital. Seu papel é vital para integrar e otimizar processos administrativos, proporcionando suporte essencial para a prestação de cuidados de saúde de alta qualidade.</p>
        <p>O vice-presidente de operações de um hospital supervisiona as operações diárias de atendimento ao paciente, garantindo eficiência e qualidade nos serviços clínicos e não clínicos. Suas responsabilidades incluem a gestão de departamentos clínicos, coordenação de serviços de saúde, implementação de políticas operacionais, monitoramento de desempenho, melhoria contínua de processos, e garantia de conformidade com regulamentos. Ele também trabalha em estreita colaboração com outros líderes para alinhar as operações com os objetivos estratégicos do hospital, visando a excelência no cuidado ao paciente e na eficiência operacional.</p>
        <p>O diretor técnico médico de um hospital é responsável por supervisionar a qualidade e a eficácia dos serviços médicos prestados. Suas funções incluem garantir a conformidade com normas e regulamentos médicos, coordenar a implementação de protocolos clínicos, supervisionar a educação e o desenvolvimento contínuo dos médicos, promover a pesquisa e a inovação clínica, e colaborar com outros líderes para melhorar a qualidade do atendimento ao paciente. Ele também participa na revisão e na aprovação de políticas médicas e atua como um elo entre a administração hospitalar e o corpo clínico.</p>
        <p>A Diretora Técnica de Enfermagem de um hospital é responsável por supervisionar todos os aspectos dos serviços de enfermagem. Suas funções incluem garantir a qualidade e a segurança dos cuidados de enfermagem, desenvolver e implementar políticas e procedimentos de enfermagem, supervisionar a educação e o desenvolvimento contínuo da equipe de enfermagem, e assegurar a conformidade com regulamentos e padrões de saúde. Ela também coordena a colaboração entre a equipe de enfermagem e outros departamentos, promove práticas baseadas em evidências e trabalha para melhorar continuamente os cuidados ao paciente e a eficiência operacional.</p>
        <p>O procurador-geral de um hospital é responsável por supervisionar todos os assuntos legais da instituição. Suas funções incluem fornecer consultoria jurídica à administração, garantir a conformidade com leis e regulamentos de saúde, gerenciar litígios e processos judiciais, revisar e negociar contratos, lidar com questões de ética e conformidade, e proteger os interesses legais do hospital. Ele também colabora com outros departamentos para identificar e mitigar riscos legais, assegurando que as operações hospitalares sejam conduzidas dentro do quadro legal apropriado.</p>
        <p>Atualmente, no ano de 2024, os cargos são ocupados pelos seguintes colaboradores:</p>
        <p>Presidenta: Gisele da Rosa Vieira</p>
        <p>Vice-presidente Financeiro: Arivelton Ramos</p>
        <p>Vice-presidente Administrativo: Aguinaldo Cavedon</p>
        <p>Vice-presidente de Operações: Melissa Vargas</p>
        <p>Diretor Técnica Médica: Maria Salete Macedo</p>
        <p>Diretora Técnica de Enfermagem: Fernanda Estrella</p>
        <p>Procurador-Geral: Fernando Cordeiro da Silva</p>
      </div>
    </section>
  );
}

export default Direcao;
