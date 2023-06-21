import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/styles.css';
import AddEstudiante from './components/AddEstudiante';
import Estudiantes from './components/Estudiantes';
import Generos from './components/Generos';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">Estudiantes</Link>
          </li>
          <li>
            <Link to="/generos" className="nav-link">Generos</Link>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Estudiantes/>} />
        <Route path="/students/add" element={<AddEstudiante/>} />
        <Route path="/generos" element={<Generos />} />
      </Routes>
    </Router>
  );

  
  
}


export default App;
