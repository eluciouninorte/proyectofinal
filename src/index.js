import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Principal from './Componentes/Principal'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registrar from './Componentes/Registrar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/index" element={<Principal/>}/>
        <Route path="/registro" element={<Registrar/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
