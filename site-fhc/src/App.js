import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './ui/pages/HomePage';
import DoacaoPage from './ui/pages/DoacaoPage';
import FundacaoPage from './ui/pages/FundacaoPage';
import OuvidoriaPage from './ui/pages/OuvidoriaPage'
import EscalasPage from './ui/pages/EscalasPage';
import EscalaPage from './ui/pages/escala/AnestesistasPage';
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


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<Error404Page/>}/> 

          <Route path='/' element={<HomePage/>}/> 
          <Route path='/doacao' element={<DoacaoPage/>}/>
          <Route path='/fundacao' element={<FundacaoPage/>}/> 
          <Route path='/ouvidoria' element={<OuvidoriaPage/>}/>
          
          {/* ROTAS ESCALAS */}
          <Route path='/escalas' element={<EscalasPage/>}/>
          <Route path='/escala' element={<EscalaPage/>}/>
          <Route path='/escala?especialidade=ANESTESISTAS' element={<AnestesistasPage/>}/>
          <Route path='/escala?especialidade=CENTRO OBSTÉTRICO' element={<CentroObstetricoPage/>}/>
          <Route path='/escala?especialidade=CIRURGIÃO GERAL' element={<CirurgiaoGeralPage/>}/>
          <Route path='/escala?especialidade=CENTRO CIRÚRGICO' element={<CentroCirurgicoPage/>}/>
          <Route path='/escala?especialidade=CENTRO CIRÚRGICO' element={<ClinicoGeralAssistentePage/>}/>
          <Route path='/escala?especialidade=MATERNIDADE' element={<MaternidadePage/>}/>
          <Route path='/escala?especialidade=NEUROCIRURGIÕES' element={<NeurocirurgioesPage/>}/>
          <Route path='/escala?especialidade=NEUROLOGIA' element={<NeurologiaPage/>}/>
          <Route path='/escala?especialidade=ONCOLOGIA' element={<OncologiaPage/>}/>
          <Route path='/escala?especialidade=POLI ADULTO' element={<PoliAdultoPage/>}/>
          <Route path='/escala?especialidade=PRONTO SOCORRO PEDIÁTRICO' element={<ProntoSocorroPediatricoPage/>}/>
          <Route path='/escala?especialidade=PRONTO SOCORRO' element={<ProntoSocorroPage/>}/>
          <Route path='/escala?especialidade=PSIQUIATRIA' element={<PsiquiatriaPage/>}/>
          <Route path='/escala?especialidade=ROTINEIROS CLÍNICAS' element={<RotineirosClinicasPage/>}/>
          <Route path='/escala?especialidade=ROTINA ALOJAMENTO CONJUNTO' element={<RotinaAlojamentoConjuntoPage/>}/>
          <Route path='/escala?especialidade=ROTINA CIRÚRGICA' element={<RotinaCirurgicaPage/>}/>
          <Route path='/escala?especialidade=ROTINA ONCOLÓGICA' element={<RotinaOncologicaPage/>}/>
          <Route path='/escala?especialidade=ROTINA PEDIÁTRICA MATERNIDADE' element={<RotinaPediatricaMaternidadePage/>}/>
          <Route path='/escala?especialidade=TRAUMATO' element={<TraumatoPage/>}/>
          <Route path='/escala?especialidade=UTI ADULTO' element={<UtiAdultoPage/>}/>
          <Route path='/escala?especialidade=UTI ADULTO 2' element={<UtiAdulto2Page/>}/>
          <Route path='/escala?especialidade=UTI NEO' element={<UtiNeoPage/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
