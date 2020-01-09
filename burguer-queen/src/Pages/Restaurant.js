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
      const [options, setOptions] = useState("")
      const [modal, setModal] = useState({status: false})
      const [filteredMenu, setFilteredMenu] = useState([]);
      const [extras, setExtras] = useState("");


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
          
      }

      function filterFood(typeMenu){  
        if (typeMenu === 'breakfast'){ 
          const filteredMenu =  menu.filter(element => element.breakfast === true)
          setFilteredMenu(filteredMenu);
        }
        else if (typeMenu === 'AllDay') {
          const filteredMenu = menu.filter(element => element.breakfast === false)
          setFilteredMenu(filteredMenu);            
        }
      }

      function deleteAddProduct(menuItem) {
        const products = order.findIndex(element => element.name === menuItem.name);
        const removeItem = order.splice(element => element.name !== menuItem.name);
        if (menuItem.contador === 1) {
          setOrder([...removeItem]);
        } else {
          order[products].contador += -1;
          setOrder([...order]);
        }
      }
      
      useEffect(() => {
        console.log(order);
        
      }, [order])
      
       const verifyOptions = (menuItem) => {
         if (menuItem.options.length > 1 ) {
             setModal({status: true, item: menuItem});
         }  else {
           saveOrder(menuItem)
          }
        }

        const addOptionsExtras = () => {
          const updatedItem = {...modal.item, name: `${modal.item.name}
          ${options} ${extras}`}
          saveOrder(updatedItem)
          setModal({status: false})
        }

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

    
      
    return(

      <div>
      <Nav/>
      <Button title={"Breakfast"} handleClick={() => filterFood('breakfast')}/>
      <Button title={"AllDay"} handleClick={() => filterFood('AllDay')} />
          
      {filteredMenu.map((menuItem, index) =>
      <MenuCard key={index+menuItem.name} {...menuItem}   
      handleClick={() => verifyOptions(menuItem)}
      />
      )}

      { modal.status ? (
        <div>
          <h3>Extras</h3>
          {modal.item.extras.map((elem, index) => (
            <div key = {index}>
            <input onChange={() => setExtras(elem)} 
            type ="radio" name="extras" value = {elem}/>
            <label>{elem}</label>
            </div>
          ))}
          <h3>Opções</h3>
          {modal.item.options.map((elem, index) => (
            <div key = {index}>
            <input onChange={() => setOptions(elem)} 
            type ="radio" name="options" value = {elem}/>
            <label>{elem}</label>
            </div>
          ))}
        {<Button handleClick = {() => addOptionsExtras()} tittle = {"Adicionar"} />}
        </div>
      ): false }

      {order.map((orderItem, index) => {
        return(
        <Orders key = {index}  
        title = {'deletar'} quantidade = {orderItem.contador}
        name = {orderItem.name} price = {orderItem.price} 
        handleClick = {() => deleteAddProduct(orderItem)}
        />)
      })}
      {/* <Button title={"Salvar"} handleClick={() => infoClient()} /> */}

      {/* <Modal show={show} handleClick={() => setShow('false')} 
      text="Preencha todos os campos" nameBtn="Fechar" /> */}

      </div>     
           
           )
}

export default Restaurant;