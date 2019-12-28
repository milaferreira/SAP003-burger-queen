import React from 'react';

function MenuCard(props){
    return (
        <section on click={props.handleClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}
export default MenuCard;