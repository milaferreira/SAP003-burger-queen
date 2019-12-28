import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
import db from '../Utils/config'
import MenuCard from '../Componentes/MenuCard'

const Restaurant = () => {

      const [menu, setMenu] = useState([]);

    useEffect(() => {
        db.collection('menu').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              setMenu((currentState) => [...currentState, doc.data()]);
                                      
            });
          })
        
    }, []);
    
    
 
    return(

      <div>
        {menu.map(menuItem =>
          <MenuCard name={menuItem.name} price={menuItem.price} 
          handleClick={() => console.log(menuItem)
          }/>)}

      </div>     
    )
}

export default Restaurant;