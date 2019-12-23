import React from 'react';
import {   BrowserRouter as Router,
Link     } from "react-router-dom";

function Nav(){
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
          </div>
        </Router>
      );  
    }

export default Nav;