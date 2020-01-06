import React from 'react';
import {   Link     } from "react-router-dom";


function Nav(){
    return (
          <div>
            <nav>
              <ul>
                <li>
                <Link to="/restaurant">Restaurante</Link> 
                </li>
                <li>
                <Link to="/cozinha">Cozinha</Link> 
                </li>
              </ul>
            </nav>
          </div>
      );  
    }

export default Nav;