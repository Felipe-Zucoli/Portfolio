import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/barraDeNav/navBar';
import Home from './components/home/home';
import Sobre from './components/sobre/sobre';
import Contato from './components/contato/contato'
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
      </Routes>
    </Router>
  )
}

export default App
