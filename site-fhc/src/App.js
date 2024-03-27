import './App.css';
import React, {useState, useEffect} from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './ui/pages/HomePage';
import DoacaoPage from './ui/pages/DoacaoPage';
import FundacaoPage from './ui/pages/FundacaoPage';
import OuvidoriaPage from './ui/pages/OuvidoriaPage'
import EscalasPage from './ui/pages/EscalasPage';
import EscalaPage from './ui/pages/EscalaPage';
import Error404Page from './ui/pages/ErrorPage';


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
          <Route path='/escalas' element={<EscalasPage/>}/>
          <Route path='/escala' element={<EscalaPage/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
