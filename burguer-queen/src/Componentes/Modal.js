import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Componentes/Button';


const Modal = ({
    show, handleClick, nameBtn, text,
  }) => {
    if (show === 'false') {
      return null;
    }
    return (
      <section className={css(styles.modal)}>
        <article className={css(styles.box)}>
          <p>{text}</p>
          <Button handleClick={handleClick} name={nameBtn} />
        </article>
      </section>
    );
  };
  
  Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    nameBtn: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  
  export default Modal;