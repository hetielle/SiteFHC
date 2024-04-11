import React from "react";
import Header from "../geral/Header";
import Footer from "../geral/Footer";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../doacao/style/Doacao.css";
import "../doacao/style/DoacaoSmartphone.css";
import Caminhada from "../doacao/img/caminhada.JPG";

const Doacao = () => {

  AOS.init();

    return (
      <React.Fragment>
        <Header/>

        <article className="container-doacao">

          <section className="container-introducao-doacao">
            <div className="container-introducao-doacao-conteudo animate__animated animate__fadeInLeft">
              <h1 className="animate__animated animate__fadeInDown">Seja um doador!</h1>
              <hr/>
              <p>A atitude de doar órgãos é um gesto marcado pela solidariedade e generosidade, capaz de promover uma mudança radical na vida daqueles que aguardam esperançosamente por um transplante. Ao se tornar um doador de órgãos, você está concedendo uma oportunidade renovada de vida a pacientes que enfrentam doenças graves e sem retorno. Esse nobre gesto não apenas restaura a saúde, mas também renova a esperança e eleva a qualidade de vida de inúmeras pessoas.</p>

              <p>O Brasil tem o maior programa público de transplante de órgãos de tecidos e de células do mundo. Através do SUS, os pacientes recebem atendimento abrangente, equitativo, universal e gratuito, que engloba desde exames preparatórios, cirurgia e acompanhamento até medicamentos pós-transplante. <strong>O doador é capaz de salvar mais de vinte pessoas</strong>, podendo doar córneas, coração, fígado, pulmão, rim, pâncreas, ossos, vasos sanguíneos, pele, tendões e cartilagem.</p>

              <div className="container-conclusao-doacao animate__animated animate__fadeInUp">
                <p>Não subestime o impacto positivo que sua decisão pode ter no mundo. Juntos, podemos fazer a diferença e deixar um legado de compaixão que ecoará através do tempo!</p>
              </div>
            </div>

            <img className="animate__animated animate__fadeInRight" src={Caminhada} alt="" />
          </section>

          <section data-aos="fade-up" className="container-doacao-brasil">
            <section className="container-doacao-brasil-introducao">
              <h2 data-aos="fade-down">Como funciona a doação de órgãos no Brasil?</h2>
              <hr data-aos="fade-up"/>
              <p>Tornar-se um doador é uma decisão que pode fazer toda a diferença na vida de alguém que aguarda ansiosamente por uma segunda chance. É importante entender que para se tornar um doador, é essencial comunicar sua vontade à família, já que <strong>são os parentes os responsáveis por autorizar a doação.</strong> No entanto, não é necessário formalizar essa decisão por escrito. Basta comunicá-los de seu desejo. Dessa forma, essa simples atitude pode inspirar outros a seguir o mesmo caminho de generosidade e solidariedade, criando um legado de amor e esperança para as gerações futuras.</p>

              <p>Além disso, a mais recente versão da Carteira de Identidade oferece uma nova funcionalidade no verso, permitindo que os indivíduos expressem seu desejo de serem doadores de órgãos após a morte. No entanto, mesmo com essa atualização no documento, ainda é necessário que a pessoa comunique claramente à família sua decisão.</p>
            </section>

            <section className="container-doador-doacao">

              <div data-aos="fade-up" className="container-doador-doacao-conteudo">
                <h3 data-aos="fade-down">Quem pode ser doador?</h3>
                <hr data-aos="fade-up"/>
                <p>Pode ser doador qualquer pessoa que venha a morrer por <strong>morte encefálica</strong> e em que sua família autorize a doação dos órgãos ou tecidos. Idade, o diagnóstico que levou à morte clínica e tipo sangüíneo são itens estudados do provável doador para saber se há receptor compatível. Apenas algumas poucas doenças, como alguns tipos de câncer e o HIV impedem a doação.</p>
              </div>

              <div data-aos="zoom-in" className="container-info-doador-doacao">
                <h3>O que é morte encefálica?</h3>
                <p>A morte encefálica é a morte de fato, compreendida pela perda completa e irreversível das funções encefálicas cerebrais, definida pela cessação das funções corticais e do tronco encefálico ou tronco cerebral.</p>
              </div>
            </section>
            
            <section data-aos="fade-up" className="container-processo-doacao">

              <img data-aos="fade-up" src={Caminhada} alt="" />

              <div data-aos="fade-up" className="container-processo-doacao-conteudo">
                <h3 data-aos="fade-down">Como é realizado o processo?</h3>
                <hr data-aos="fade-up"/>
                <p>O paciente que aguarda por um transplante, conhecido como receptor, passa por uma série de exames para avaliar suas necessidades de tratamento e transplante. Seus dados como Potencial Receptor de órgãos ou tecidos são cuidadosamente organizados em um sistema informatizado, sob a supervisão do Sistema Nacional de Transplantes. Esse sistema registra e disponibiliza informações sobre os doadores de órgãos, bem como os resultados dos exames do receptor. Todos esses dados são processados e armazenados, contribuindo para a formação de uma lista única de receptores.</p>

                <p>O sistema utiliza essas informações para identificar as opções de doadores mais compatíveis. A partir disso, uma lista única de receptores é gerada para cada doador disponível. Os receptores listados são então submetidos à avaliação minuciosa de suas equipes médicas, a fim de determinar quem está em melhores condições para receber o órgão e apresenta a maior compatibilidade com o doador.</p>

                <p>Uma vez que a equipe transplantadora responsável pelo receptor aceita o órgão, ele é encaminhado pela Central de Transplantes ao hospital onde o paciente está internado para que o procedimento seja realizado. É importante ressaltar que, em qualquer fase do processo, o receptor tem o direito de desistir de receber o órgão doado. Nesse caso, o órgão é direcionado para o próximo receptor compatível na lista única, garantindo que seja utilizado de forma eficiente e responsável, oferecendo esperança e uma nova chance de vida a quem mais precisa.</p>
              </div>
              
            </section>
          </section>
        </article>

        <Footer/>
      </React.Fragment>
    )
  }
   
  export default Doacao