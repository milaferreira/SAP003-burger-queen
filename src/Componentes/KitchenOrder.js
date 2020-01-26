import React from 'react';
import Button from '../Componentes/Button'

function KitchenOrder(props){
        return (
    <div>
      <section>
        <p>Cliente: {props.clientName}</p>
        Mesa: {props.tableNumber}
        <div>{props.clientOrder}</div>
        <p><strong>Status: {props.status}</strong></p>
        <p>{props.time}</p>
        <div><Button title="Pronto!"/></div>
      </section>
    </div>
  )
}

export default KitchenOrder;