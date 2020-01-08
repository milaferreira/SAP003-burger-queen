import Button from '../Componentes/Button'
import React from 'react';
import MenuCard from '../Componentes/MenuCard'

function Orders(props){
    return (
    <div>
        <MenuCard name = {props.name} price = {props.price} />
        <Button title={"-1"} handleClick={props.handleClick}/>

        <Button title={"+1"} handleClick={props.handleClick}/>

    </div>
    )}

export default Orders;