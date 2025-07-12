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
import Button from '@components/Button';
import './Modal.scss';

const Modal = (props) => {
  if (!props.isOpen) return null;

  // Funzione per renderizzare i pulsanti delle azioni
  const renderActions = () => {
    if (!props.actions || props.actions.length === 0) {
      return null;
    }

    return (
      <div className="modal__actions">
        {props.actions.map((action, index) => (
          <Button
            key={index}
            label={action.label}
            onClick={action.onClick}
            type={action.isPrimary ? 'primary' : 'secondary'}
            color={action.color || 'info'}
            icon={action.icon || null}
          />
        ))}
      </div>
    );
  };

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
        {renderActions()}
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
  className: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      isPrimary: PropTypes.bool,
      color: PropTypes.oneOf(['info', 'error']),
      icon: PropTypes.node
    })
  )
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => { },
  title: '',
  subtitle: '',
  children: null,
  className: '',
  actions: []
};

export default Modal;
