import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Kitchen from './Pages/Kitchen';
import Restaurant from './Pages/Restaurant';




function App() {
  return (
      <BrowserRouter className="App">
          
      <div>

          <Route path="/restaurant" exact component={Restaurant} />
          <Route path="/cozinha" exact component={Kitchen} />

      </div>
      </BrowserRouter>
  );  
}

export default App;
