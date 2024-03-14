import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './ui/pages/HomePage';
import DoacaoPage from './ui/pages/DoacaoPage';
import FundacaoPage from './ui/pages/FundacaoPage';
import OuvidoriaPage from './ui/pages/OuvidoriaPage'
import EscalasPage from './ui/pages/EscalasPage';
import EscalaPage from './ui/pages/EscalaPage';


function App() {
  return (
    <div className="App">

      <ToastContainer/>

      <BrowserRouter>
        <Routes>

          {/* <Route path='*' element={<Error/>}/>  */}

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
