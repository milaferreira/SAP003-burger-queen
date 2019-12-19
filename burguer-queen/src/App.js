import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Kitchen from './Pages/Kitchen';
import Restaurant from './Pages/Restaurant';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Salao">Salão</Link>
            </li>
            <li>
              <Link to="/Cozinha">Cozinha</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Salao" component= {Restaurant} />
          <Route path="/Cozinha" component={Kitchen} />
        </Switch>
      </div>
    </Router>
  );  
}

export default App;
