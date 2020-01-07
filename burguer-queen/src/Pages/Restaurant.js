import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
import firebase from '../Utils/config'
import MenuCard from '../Componentes/MenuCard'
//import Input from '../Componentes/Input'
import Button from '../Componentes/Button'
//import Modal from '../Componentes/Modal'
import Nav from '../Componentes/Nav';


const Restaurant = () => {

      const [menu, setMenu] = useState([]);
      /*const [client, setClient] = useState('');
      const [table, setTable] = useState(0);
      const [show, setShow] = useState(false);*/
      const [order, setOrder] = useState([]); 
      const [ setFilteredMenu] = useState([]);     

      useEffect(() => {
        firebase.firestore().collection('menu').get()
          .then((snapshot) => {
            snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
          });
      }, []);
    
      /*function infoClient() {
        const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
        const time = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
        if (client === '' && table === '') {
          setShow(true);
        } else {
          firebase.firestore().collection('orders').add({
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
      }*/

      const deleteProduct = (product) => {
        const products = order.findIndex(item => item.name === product.name);
        const removeItem = order.filter(item => item.name !== product.name);
        if (product.quantity === 1) {
          setOrder([...removeItem]);
        } else {
          order[products].quantity += -1;
          setOrder([...order]);
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
          //console.log(filteredMenu)
        }
      }
      
    return(

      <div>
      <Nav/>
      <Button title={"Breakfast"} handleClick={() => filterFood('breakfast')}/>
      <Button title={"AllDay"} handleClick={() => filterFood('AllDay')} />
          
      {order.map((product, item) => <Button key={item.name} 
      quantity={product.quantity} name={product.name} 
      type={product.type ? product.type : ""} onClick={deleteProduct}/>)}
      </div>     
       //{menu.map((menuItem, index) =>
       //<MenuCard key={index} name={menuItem.name}   price={menuItem.price} handleClick={() => console.log(menuItem)}/>
       //)}
       // <Button title={"Salvar"} handleClick={() => infoClient()} />
           
       //<Modal show={show} handleClick={() => setShow('false')} text="Preencha todos os campos" nameBtn="Fechar" />
           )
}

export default Restaurant;