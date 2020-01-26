import React from 'react';
import { Link } from "react-router-dom"
  import '../Pages/Main.css';


function Main(){
    
    return (
        <div className={'main'}>
            <nav className={'main-navegation'}>
                <Link to="/restaurant">Restaurante</Link>
                <Link to="/kitchen">Cozinha</Link>
            </nav>
        </div>
    )
}

export default Main;