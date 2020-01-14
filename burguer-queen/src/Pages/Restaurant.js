  import React, { useEffect, useState } from 'react';
  import firebase from '../Utils/config'
  import MenuCard from '../Componentes/MenuCard'
  import Button from '../Componentes/Button'
  import Input from '../Componentes/Input'
  import Orders from '../Componentes/Orders'
  import Header from '../Componentes/Header'
  import '../Pages/Restaurant.css';

  const Restaurant = () => {
    
    const [menu, setMenu] = useState([]);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [show, setShow] = useState(false);
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
            addItem(menuItem);        
          }; 
            
    }
        
        const verifyOptions = (menuItem) => {
          if (menuItem.options.length > 1 ) {
            setModal({status: true, item: menuItem});
          }  else {
            saveOrder(menuItem)
          };
        }
        
        function filterFood(typeMenu){  
          if (typeMenu === 'breakfast'){ 
            const filteredMenu =  menu.filter(element => element.breakfast === true)
            setFilteredMenu(filteredMenu);
          }
          else if (typeMenu === 'AllDay') {
            const filteredMenu = menu.filter(element => element.breakfast === false)
            setFilteredMenu(filteredMenu);            
          };
        }
        
        function addItem(menuItem){
          menuItem.contador++;
          setOrder([...order])  
        };
        
        const addOptionsExtras = () => {
          const updatedItem = {...modal.item, name: `${modal.item.name}
          ${options} ${extras}`}
          saveOrder(updatedItem)
          setModal({status: false})
        };
        
        function decreaseItem(menuItem) {
          const products = order.findIndex(element => element.name === menuItem.name);        
          if (order[products].contador > 1) {
            order[products].contador--;
            setOrder([...order])  
          } else{
            order.splice(products, 1);
            setOrder([...order]);
          };
        }
        
        function deleteItem(menuItem){
          const deleteAllItem = (order.indexOf(menuItem));
          order.splice(deleteAllItem, 1);
          setOrder([...order]);
          
        };
        
        const total = order.reduce((acc, item) => acc + (item.contador * item.price), 0);
          
          function infoClient() {
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
                    alert('Pedido enviado com sucesso')
                  );
                }
            }
                    
                    
      return(
                      
       <div>
         <Header />
         
          <h1>O que vai ser?</h1>
          <div className = {'tabela'}>
          <section className = "opções"> 
              <Button className = "menu" title={"Breakfast"} handleClick={() => filterFood('breakfast')}/>
              <Button className = "menu" title={"All Day"} handleClick={() => filterFood('AllDay')} />
          <div className = {'itens'}>
          {filteredMenu.map((menuItem, index) =>
          
          <MenuCard key={index+menuItem.name} class = {'card'}
          img ={menuItem.img}{...menuItem}   
          handleClick={() => verifyOptions(menuItem)}
          />
          )}

          { modal.status ? (
            <div className = {'extras'}>
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
            {<Button handleClick = {() => addOptionsExtras()} title = {"Adicionar"} className = {'adicionar'}/>}
            </div>
          ): false }
          </div>


          </section>
          <section className= "pedido">
                <h1>Pedido</h1> 
          {order.map((orderItem, index) => {
            return(
              <div key = {index}>
                <div className = {'itens'}>
              

            <Orders class= {"pedidos"} key = {index}  
            name = {orderItem.name} price = {orderItem.price}
            img = {orderItem.img} 
            />
            <div className = {'addDecItem'}>

            <Button className={'addDecItem1'}title={"-"} handleClick = {() => decreaseItem(orderItem, -1)}/>
            {orderItem.contador}
            <Button className={'addDecItem1'}title={"+"} handleClick = {() => addItem(orderItem, 1)}/>

            </div>
            <Button title={"Excluir Item"} handleClick = {() => deleteItem()}/>
                  </div>
                </div>
            )
          })}
          <Input value = {client} placeholder = "Cliente"
          onChange={e => setClient(e.currentTarget.value)} />
          <Input type = 'number' value = {table} placeholder = "Mesa"
          onChange={e => setTable(e.currentTarget.value)} />

          <Button className= {"enviar"}title={"Enviar"} handleClick={() => infoClient(show)} />
          </section>
            </div>
          <h5>Total R$ {total},00</h5>

      </div>     
  )
}
            
            export default Restaurant; 