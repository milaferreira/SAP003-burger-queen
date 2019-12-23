import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
import firebase from '../Utils/config'

function Restaurant(){
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('menu').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              setMenu(doc.data());
            });
          })
        
    }, []);
    console.log(menu)
    return(

    <div>Menu</div>     
    )
}

export default Restaurant;