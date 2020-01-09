import Button from '../Componentes/Button'
import React from 'react';
import MenuCard from '../Componentes/MenuCard'

function Orders(props){
    
    return (
    <div>
        <Button title={props.title} handleClick={props.onCLick}/>
        <MenuCard name = {props.name} price = {props.price} />
        <Button title={"-1"} handleClick={props.handleClick}/>
        <div>
            {props.quantidade}
        </div>

        <Button title={"+1"} handleClick={props.handleClick}/>

    </div>
    )}

export default Orders;