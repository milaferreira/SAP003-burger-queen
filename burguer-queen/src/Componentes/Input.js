import React from 'react';

function Input(props) {
    return (
      <input placeholder={props.placeholder} 
      title={props.title} 
      type={props.type}/>
    )
  };

export default Input;