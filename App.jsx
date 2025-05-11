import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Importa o estilo global, se necessário

// Importando as páginas
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import Agendamento from './pages/Agendamento/Agendamento';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Login from './pages/Login/Login';  // Importando a tela de Login

function App() {
  return (
    <Router>
      {/* Navbar com Links de Navegação */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Login</Link></li> {/* Rota de Login */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/agendamento">Agendamento</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      {/* Definindo as Rotas */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Tela de Login */}
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
