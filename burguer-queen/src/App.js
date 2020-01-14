import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Restaurant from './Pages/Restaurant';

function App() {
  return (

      <BrowserRouter className="App">
          
      <div>
          <Route path="/" exact component={Restaurant} />

      </div>
      </BrowserRouter>
  );  
}

export default App;
