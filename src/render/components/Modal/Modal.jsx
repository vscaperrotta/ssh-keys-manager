/**
 *
 * Modal
 *
 * @author Vittorio Scaperrotta
 * @date 25-Jun-2025
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import './Modal.scss';

const Modal = (props) => {
  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal__wrapper ${props.className}`}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal__header">
          <h2 className='modal__title'>{props.title}</h2>
          <p className='modal__subtitle'>{props.subtitle}</p>
          <button
            className="modal__close-btn"
            onClick={props.onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </header>
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => { },
  title: '',
  subtitle: '',
  children: null,
  className: ''
};

export default Modal;
