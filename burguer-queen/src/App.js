import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Kitchen from './Pages/Kitchen';
import Restaurant from './Pages/Restaurant';
import Nav from './Componentes/Nav';



function App() {
  return (
      <BrowserRouter className="App">
          <Nav/>
      <div>

          <Route path="/restaurante" component={Restaurant} />
          <Route path="/cozinha" component={Kitchen} />

      </div>
      </BrowserRouter>
  );  
}

export default App;
