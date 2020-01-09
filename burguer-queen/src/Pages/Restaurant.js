import React, { useEffect, useState } from 'react';
import firebase from '../Utils/config'
import MenuCard from '../Componentes/MenuCard'
import Button from '../Componentes/Button'
// import Modal from '../Componentes/Modal'
import Nav from '../Componentes/Nav';
import Orders from '../Componentes/Orders'


const Restaurant = () => {

      const [menu, setMenu] = useState([]);
      // const [client, setClient] = useState('');
      // const [table, setTable] = useState(0);
      // const [setShow] = useState(false);
      const [order, setOrder] = useState([]); 
      const [filteredMenu, setFilteredMenu] = useState([]);     

      useEffect(() => {
        firebase.firestore().collection('menu').get()
          .then((snapshot) => {
            snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
          });
      }, []);

      function saveOrder(menuItem){
        const index = order.findIndex(element => element.name === menuItem.name)
        if(index === -1) {
            menuItem.contador = 1;
            setOrder([...order, menuItem])
        } else {
            menuItem.contador += 1;
            setOrder([...order])             
           }   
           setTotal(+(total + item.price));          
          
      }

      useEffect(() => {
        console.log(order);

    }, [order])


      // function infoClient() {
      //   const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
      //   const time = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
      //   if (client === '' && table === '') {
      //     setShow(true);
      //   } else {
      //     firebase.firestore().collection('orders').add({
      //       date,
      //       time,
      //       clock: new Date().getTime(),
      //       leadTime: '',
      //       client,
      //       table,
      //       order,
      //       status: 'em preparação',
      //     }).then(
      //       setClient(''),
      //       setTable(''),
      //       setOrder([]),
      //     );
      //   }
      // }

      // function deleteProduct(product) {
      //   const products = order.findIndex(item => item.name === product.name);
      //   const removeItem = order.filter(item => item.name !== product.name);
      //   if (product.quantity === 1) {
      //     setOrder([...removeItem]);
      //   } else {
      //     order[products].quantity += -1;
      //     setOrder([...order]);
      //   }
      // }
    
      const filterFood = (typeMenu) => {  
        if (typeMenu === 'breakfast'){ 
          const filteredMenu =  menu.filter(element => element.breakfast === true)
          setFilteredMenu(filteredMenu);
        }
        else if (typeMenu === 'AllDay') {
          const filteredMenu = menu.filter(element => element.breakfast === false)
          setFilteredMenu(filteredMenu);            
        }
      }
      
    return(

      <div>
      <Nav/>
      <Button title={"Breakfast"} handleClick={() => filterFood('breakfast')}/>
      <Button title={"AllDay"} handleClick={() => filterFood('AllDay')} />
          
      {filteredMenu.map((menuItem, index) =>
      <MenuCard key={index+menuItem.name} name={menuItem.name}   
      handleClick={() => saveOrder(menuItem)}
      price={menuItem.price} />
      )}

      {order.map((orderItem, index) => {
        return(<Orders key = {index} name = {orderItem.name} price = {orderItem.price} 
        />)
      })}
      {/* <Button title={"Salvar"} handleClick={() => infoClient()} /> */}

      {/* <Modal show={show} handleClick={() => setShow('false')} 
      text="Preencha todos os campos" nameBtn="Fechar" /> */}

      </div>     
           
           )
}

export default Restaurant;