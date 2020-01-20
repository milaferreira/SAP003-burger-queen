import React from 'react';

function MenuCard(props){
    return (
        <section className={props.class}
        onClick={props.handleClick}>
                <img 
                src = {props.img}
                className = {'image'}>
                </img>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p></p>
        </section>
    )
}
export default MenuCard;