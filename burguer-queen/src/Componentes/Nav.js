import React from 'react';
import {   BrowserRouter as Router,
Link     } from "react-router-dom";
import Button from '../Componentes/Button'

function Nav(){
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                <Button title={<Link to="/restaurant">Restaurante</Link>} />
                </li>
                <li>
                <Button title={<Link to="/cozinha">Cozinha</Link>} />
                </li>
              </ul>
            </nav>
          </div>
        </Router>
      );  
    }

export default Nav;