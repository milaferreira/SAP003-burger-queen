import React from 'react';

function Button(props){
    return (
    <button key={props.id} 
    className={props.className} 
    onClick={props.handleClick}>{props.title}
    </button>
    )
  };

export default Button;