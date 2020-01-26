import React, { useEffect, useState } from 'react';
import firebase from '../Utils/config'
import KitchenOrder from '../Componentes/KitchenOrder'
import Main from '../Pages/Main'  
import Header from '../Componentes/Header'


function Kitchen() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders')
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setOrders(orders);
      })
  });

  return (
    <main>
      <div>
          <Header />
          <Main />
        <div>
          {orders.map((ord) =>
            <KitchenOrder key={ord.id}
              clientName={ord.client}
              tableNumber={ord.table}
              time={ord.time}
              status={ord.status}
            //   clientOrder={ord.clientOrder.map((item, index) => (
            //     <div key={index}>
            //     {item.count}x {item.name}
            //     </div>
            //   ))}
           />)}
        </div>
      </div>
    </main>
  );
}


export default Kitchen;