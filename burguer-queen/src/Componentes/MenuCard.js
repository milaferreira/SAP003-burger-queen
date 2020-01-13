import React from 'react';

function MenuCard(props){
    return (
        <section className={props.class}
        onClick={props.handleClick}>
             {/* <figure>                */}
                <img 
                src = {props.img}>
                </img>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p></p>
        </section>
    )
}
export default MenuCard;