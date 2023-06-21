import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/styles.css';



function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">Estudiantes</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">Generos</Link>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/app" element={<AcercaDe />} />
        <Route path="/students/add" element={<Contacto />} />
      </Routes>
    </Router>
  );
  function Inicio() {
    return <h1>Página de inicio</h1>;
  }
  
  function AcercaDe() {
    return <h1>Acerca de nosotros</h1>;
  }
  
  function Contacto() {
    return <h1>Página de contacto</h1>;
  }
  
}


export default App;
