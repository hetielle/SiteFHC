import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './ui/pages/HomePage';
import DoacaoPage from './ui/pages/DoacaoPage';
import FundacaoPage from './ui/pages/FundacaoPage';
import OuvidoriaPage from './ui/pages/OuvidoriaPage'
import EscalasPage from './ui/pages/EscalasPage';
import Error404Page from './ui/pages/Error404Page';
import AnestesistasPage from './ui/pages/escala/AnestesistasPage';
import CentroObstetricoPage from './ui/pages/escala/CentroObstetricoPage';
import CirurgiaoGeralPage from './ui/pages/escala/CirurgiaoGeralPage';
import CentroCirurgicoPage from './ui/pages/escala/CentroCirurgicoPage';
import ClinicoGeralAssistentePage from './ui/pages/escala/ClinicoGeralAssistentePage';
import MaternidadePage from './ui/pages/escala/MaternidadePage';
import NeurocirurgioesPage from './ui/pages/escala/NeurocirurgioesPage';
import NeurologiaPage from './ui/pages/escala/NeurologiaPage';
import OncologiaPage from './ui/pages/escala/OncologiaPage';
import PoliAdultoPage from './ui/pages/escala/PoliAdultoPage';
import ProntoSocorroPediatricoPage from './ui/pages/escala/ProntoSocorroPediatricoPage';
import ProntoSocorroPage from './ui/pages/escala/ProntoSocorroPage';
import PsiquiatriaPage from './ui/pages/escala/PsiquiatriaPage';
import RotineirosClinicasPage from './ui/pages/escala/RotineirosClinicasPage';
import RotinaAlojamentoConjuntoPage from './ui/pages/escala/RotinaAlojamentoConjuntoPage';
import RotinaCirurgicaPage from './ui/pages/escala/RotinaCirurgicaPage';
import RotinaOncologicaPage from './ui/pages/escala/RotinaOncologicaPage';
import RotinaPediatricaMaternidadePage from './ui/pages/escala/RotinaPediatricaMaternidadePage';
import TraumatoPage from './ui/pages/escala/TraumatoPage';
import UtiAdultoPage from './ui/pages/escala/UtiAdultoPage';
import UtiAdulto2Page from './ui/pages/escala/UtiAdulto2Page';
import UtiNeoPage from './ui/pages/escala/UtiNeoPage';
import PoliticaPrivacidadePage from './ui/pages/PoliticaPrivacidadePage';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<Error404Page/>}/> 

          <Route path='/' element={<HomePage/>}/> 
          <Route path='/doacao' element={<DoacaoPage/>}/>
          <Route path='/fundacao' element={<FundacaoPage/>}/> 
          <Route path='/fale-conosco' element={<OuvidoriaPage/>}/>
          <Route path='/politica-privacidade' element={<PoliticaPrivacidadePage/>}/>
          
          {/* ROTAS ESCALAS */}
          <Route path="/escalas" element={<EscalasPage/>}/>
          <Route path="/escala" element={<EscalaPage/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

function EscalaPage() {
  let location = useLocation();
  let searchParams = new URLSearchParams(location.search);
  let especialidade = searchParams.get('especialidade');

  switch (especialidade) {
    case 'ANESTESISTAS':
      return <AnestesistasPage />;
    case 'CENTRO OBSTÉTRICO':
      return <CentroObstetricoPage />;
    case 'CIRURGIÃO GERAL':
      return <CirurgiaoGeralPage />;
    case 'CENTRO CIRÚRGICO':
      return <CentroCirurgicoPage />;
    case 'CLÍNICO GERAL ASSISTENTE':
      return <ClinicoGeralAssistentePage />;
    case 'MATERNIDADE':
      return <MaternidadePage />;
    case 'NEUROCIRURGIÕES':
      return <NeurocirurgioesPage />;
    case 'NEUROLOGIA':
      return <NeurologiaPage />;
    case 'ONCOLOGIA':
      return <OncologiaPage />;
    case 'POLI ADULTO':
      return <PoliAdultoPage />;
    case 'PRONTO SOCORRO PEDIÁTRICO':
      return <ProntoSocorroPediatricoPage />;
    case 'PRONTO SOCORRO':
      return <ProntoSocorroPage />;
    case 'PSIQUIATRIA':
      return <PsiquiatriaPage />;
    case 'ROTINEIROS CLÍNICAS':
      return <RotineirosClinicasPage />;
    case 'ROTINA ALOJAMENTO CONJUNTO':
      return <RotinaAlojamentoConjuntoPage />;
    case 'ROTINA CIRÚRGICA':
      return <RotinaCirurgicaPage />;
    case 'ROTINA ONCOLÓGICA':
      return <RotinaOncologicaPage />;
    case 'ROTINA PEDIÁTRICA MATERNIDADE':
      return <RotinaPediatricaMaternidadePage />;
    case 'TRAUMATO':
      return <TraumatoPage />;
    case 'UTI ADULTO':
      return <UtiAdultoPage />;
    case 'UTI ADULTO 2':
      return <UtiAdulto2Page />;
    case 'UTI NEO':
      return <UtiNeoPage />;
    default:
      return <Error404Page />;
  }
}

export default App;
