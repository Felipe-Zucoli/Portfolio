import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/barraDeNav/navBar';
import Home from './components/home/home';
import Sobre from './components/sobre/sobre';
import Contato from './components/contato/contato';
import Projetos from './components/projetos/projetos';
import BotaoRetTopo from './components/botaoRetTopo/botaoRetTopo';

function App() {
  
  return (  
    <Router>
      <NavBar/>
      <BotaoRetTopo/>
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/sobre" element= {<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/projetos" element = {<Projetos/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  )
}

export default App
