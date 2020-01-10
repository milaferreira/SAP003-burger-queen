import React from 'react';

function Input(props) {
    return (
      <input placeholder={props.placeholder} 
      value={props.value} 
      type={props.type}
      onChange={props.onChange}
      />
    )
  };

export default Input;