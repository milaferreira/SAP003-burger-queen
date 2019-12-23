import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Kitchen from './Pages/Kitchen';
import Restaurant from './Pages/Restaurant';
//import Nav from './Componentes/Nav';

function App() {
  return (
        <Router>
      <div>
        <Switch>
          <Route path="/Salao" component= {Restaurant} />
          <Route path="/Cozinha" component={Kitchen} />
        </Switch>
      </div>
        </Router>
  );  
}

export default App;
