import React from "react";
import "./style/historia/Historia.css";
import "./style/historia/HistoriaSmartphone.css";
import hospitalAntigo from './img/hospitalAntigo.webp';


const Historia = () => {

    return (
        <section className="container-historia">

          <div data-aos="zoom-in" className="container-conteudo-historia">
            <h1 data-aos="zoom-in">Nossa história</h1>
            <hr data-aos="zoom-in"/>

            <p data-aos="zoom-in">O Hospital Centenário foi concebido no ano de 1924. Na ocasião, foi lançada a pedra fundamental do Hospital Municipal, na Praça 20 de setembro e um imposto foi criado com objetivo de prover fundos para a construção do hospital. Além disso, a comunidade se organizou na busca de recursos extras através de doações, chás, concertos e peças teatrais com a arrecadação totalmente destinada a este fundo.</p>

            <p data-aos="zoom-in">Em função da Revolução de 1930, as obras foram aceleradas, pois o Governo do Estado decidiu equipar o hospital para deixá-lo em condições de receber revolucionários feridos. Encerrada a revolução, o governo manteve a subvenção que permitiu finalizar a obra.</p>

            <p data-aos="zoom-in">Em 15 de fevereiro de 1931, na administração de Theodomiro Porto da Fonseca, aconteceu a inauguração do hospital, que foi denominado Centenário em homenagem aos 100 anos de fundação de São Leopoldo. Na ocasião, o Hospital Centenário era administrado pelas Irmãs Franciscanas da Penitência e Caridade.</p>

            <p data-aos="zoom-in">Em 1933, foi iniciado projeto de áreas de isolamento e o Hospital Centenário já era referência em atendimento à população do Vale do Sinos. Nessa época, a instituição de saúde era mantida por taxas cobradas pela Prefeitura, subvenções do Estado e pequenas arrecadações de pacientes particulares. No ano de 1960, o Hospital Centenário passou a contar com plantão médico 24 horas.</p>

            <p data-aos="zoom-in">No ano de 1989, por meio do Decreto nº 1858/89, foi criada a Fundação Hospital de Clínicas de São Leopoldo - Hospital Centenário (FHCSL). Na época, a FHCSL era uma fundação pública de direito privado, tendo sido transformada em 1990 para uma fundação pública de direito público através da Lei nº 3640/1990.</p>

            <p data-aos="zoom-in">A Lei Municipal nº 4902, de 02 de abril de 2001 reestrutura a Fundação Hospital de Clínicas de São Leopoldo - Hospital Centenário que passa a chamar-se apenas de Fundação Hospital Centenário.</p>
          </div>

            <img data-aos="zoom-in" src={hospitalAntigo} alt="Foto Antiga do Hospital Centenário"/>

      </section>
    )
  }
   
  export default Historia  