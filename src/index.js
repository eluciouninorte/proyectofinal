import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Principal from './Componentes/Principal'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registrar from './Componentes/Registrar';
import UsuarioInterno from './Componentes/UsuarioInterno';
import UsuarioExterno from './Componentes/UsuarioExterno';
import CrearEquipo from './Componentes/CrearEquipos';
import CrearTorneo from './Componentes/CrearTorneo';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/administrador" element={<Principal/>}/>
        <Route path="/registro" element={<Registrar/>}/>
        <Route path="/administrador/usuariointerno" element={<UsuarioInterno/>}/>
        <Route path="/administrador/usuarioexterno" element={<UsuarioExterno/>}/>
        <Route path="/administrador/crearequipo" element={<CrearEquipo/>}/>
        <Route path="/administrador/creartorneo" element={<CrearTorneo/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
