import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
import db from '../Utils/config'
import MenuCard from '../Componentes/MenuCard'
//import Input from '../Componentes/Input'
import Button from '../Componentes/Button'
import Modal from '../Componentes/Modal'


const Restaurant = () => {

      const [menu, setMenu] = useState([]);
      const [client, setClient] = useState('');
      const [table, setTable] = useState(0);
      const [show, setShow] = useState('false');
      const [order, setOrder] = useState([]); 
      const [filteredMenu, setFilteredMenu] = useState([]);     

      useEffect(() => {
        db.collection('menu').get()
          .then((snapshot) => {
            snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
          });
      }, []);
    
      function infoClient() {
        const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
        const time = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
        if (client === '' && table === '') {
          setShow('true');
        } else {
          db.collection('orders').add({
            date,
            time,
            clock: new Date().getTime(),
            leadTime: '',
            client,
            table,
            order,
            status: 'em preparação',
          }).then(
            setClient(''),
            setTable(''),
            setOrder([]),
          );
        }
      }
    
      const filterFood = (typeMenu) => {  
        if (typeMenu === 'breakfast'){ 
          const filteredMenu = menu.filter(element => element.breakfast === true)
          console.log(filteredMenu)
          setFilteredMenu(filteredMenu);
        }
        else if (typeMenu === 'AllDay') {
          const filteredMenu = menu.filter(element => element.breakfast === false)
          setFilteredMenu(filteredMenu);
          console.log(filteredMenu)
        }
      }
      
    return(

      <div>


        {menu.map(menuItem =>
          <MenuCard name={menuItem.name} price={menuItem.price} handleClick={() => console.log(menuItem)}/>)}
          <Button tittle={"Breakfast"} handleClick={() => filterFood('breakfast')}/>
          <Button tittle={"AllDay"} handleClick={() => filterFood('AllDay')} />
          <Button tittle={"Salvar"} handleClick={() => infoClient()} />
          <Modal show={show} handleClick={() => setShow('false')} text="Preencha todos os campos" nameBtn="Fechar" />

      </div>     
    )
}

export default Restaurant;