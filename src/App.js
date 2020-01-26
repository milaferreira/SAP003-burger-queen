import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Restaurant from './Pages/Restaurant';
import Kitchen from './Pages/Kitchen';
import Main from './Pages/Main'

function App() {
  return (

      <Router className="App">
          
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/restaurant" exact component={Restaurant} />
          <Route exact path="/kitchen" component={Kitchen} />
        </Switch>
      
      </Router>
  );  
}

export default App;
