import React from 'react';
import MenuCard from '../Componentes/MenuCard'

    function Orders(props){
        
        return (
        <div>
            <MenuCard name = {props.name} 
            price = {props.price} 
            class = {props.class} 
            img = {props.img}
            className = {'image'}
            />
            <div>
                {props.quantidade}

            </div>
            
        </div>
        )}

    export default Orders;