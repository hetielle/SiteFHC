import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './ui/pages/Home';
import Doacao from './ui/pages/Doacao';
import Fundacao from './ui/pages/Fundacao';
import Ouvidoria from './ui/pages/Ouvidoria'


function App() {
  return (
    <div className="App">

      <ToastContainer/>

      <BrowserRouter>
        <Routes>

          <Route path='*' element={<Error/>}/> 

          <Route path='/' element={<Home/>}/> 
          <Route path='/doacao' element={<Doacao/>}/>
          <Route path='/fundacao' element={<Fundacao/>}/> 
          <Route path='/ouvidoria' element={<Ouvidoria/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
