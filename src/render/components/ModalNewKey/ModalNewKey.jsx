/**
 *
 * ModalNewKey
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useIntl } from 'react-intl';
import Modal from '@components/Modal';
import './ModalNewKey.scss';

const ModalNewKey = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    type: 'rsa',
    bits: 4096,
    comment: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

  // Definisce i bit disponibili per ogni tipo di chiave
  const bitsByType = {
    rsa: [2048, 4096, 8192],
    ed25519: ['N/A'], // ED25519 ha una dimensione fissa
    dsa: [1024], // DSA supporta solo 1024 bit ed è obsoleto
    ecdsa: [256, 384, 521]
  };
  const intl = useIntl();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Quando il tipo cambia, imposta un valore di bit appropriato per quel tipo
    if (name === 'type') {
      const defaultBits = bitsByType[value][0];
      setFormState({
        ...formState,
        [name]: value,
        bits: defaultBits
      });
    } else {
      setFormState({
        ...formState,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione
    if (!formState.name.trim()) {
      setError(intl.formatMessage({ id: 'modal.newKey.name.required' }));
      return;
    }

    // Validazione caratteri permessi nel nome
    if (!/^[a-zA-Z0-9_\-\.]+$/.test(formState.name)) {
      setError(intl.formatMessage({ id: 'modal.newKey.name.invalid' }));
      return;
    }

    try {
      setIsCreating(true);
      setError('');

      // Ottieni la porta dal server attivo
      // Il server potrebbe essere sulla porta 5001 o 5002 se 5001 è occupata
      const ports = [5001, 5002];
      let response = null;
      let lastError = null;

      // Prova entrambe le porte
      for (const port of ports) {
        try {
          response = await axios.post(`http://localhost:${port}/keys`, formState, {
            timeout: 10000 // 10 secondi timeout
          });

          // Se successo, esci dal ciclo
          if (response) break;
        } catch (err) {
          lastError = err;

          // Se l'errore non è di connessione, non continuare con l'altra porta
          if (err.response) break;
        }
      }

      if (response) {
        // Successo
        props.onKeyCreated();
        props.onClose();
      } else {
        throw lastError;
      }
    } catch (error) {
      console.error(intl.formatMessage({ id: 'modal.newKey.error' }), error);

      // Estrai il messaggio di errore specifico dal server o mostra un errore generico
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else if (error.code === 'ECONNREFUSED') {
        setError(intl.formatMessage({ id: 'modal.newKey.error.serverDown' }));
      } else {
        setError(intl.formatMessage({ id: 'modal.newKey.error' }));
      }
    } finally {
      setIsCreating(false);
    }
  };

  // Define the action buttons for the modal
  const actions = [
    {
      label: intl.formatMessage({ id: 'app.cancel' }),
      onClick: props.onClose,
      isPrimary: false
    },
    {
      label: isCreating ? intl.formatMessage({ id: 'modal.newKey.creating' }) : intl.formatMessage({ id: 'modal.newKey.create' }),
      onClick: handleSubmit,
      isPrimary: true
    }
  ];

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={intl.formatMessage({ id: 'modal.newKey.title' })}
      subtitle={intl.formatMessage({ id: 'modal.newKey.subtitle' })}
      actions={actions}
    >
      <div className="modal-new-key__content">
        <form onSubmit={handleSubmit} className="modal-new-key__form">
          {error && (
            <div className="modal-new-key__error">
              {error}
            </div>
          )}

          <div className="modal-new-key__field">
            <label htmlFor="name">{intl.formatMessage({ id: 'modal.newKey.name.label' })}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder={intl.formatMessage({ id: 'modal.newKey.name.placeholder' })}
              required
            />
            <small>{intl.formatMessage({ id: 'modal.newKey.name.help' })}</small>
          </div>

          <div className="modal-new-key__field">
            <label htmlFor="type">{intl.formatMessage({ id: 'modal.newKey.type.label' })}</label>
            <select
              id="type"
              name="type"
              value={formState.type}
              onChange={handleInputChange}
            >
              <option value="rsa">RSA</option>
              <option value="ed25519">ED25519</option>
              <option value="dsa">DSA</option>
              <option value="ecdsa">ECDSA</option>
            </select>
          </div>

          <div className="modal-new-key__field">
            <label htmlFor="bits">{intl.formatMessage({ id: 'modal.newKey.bits.label' })}</label>
            <select
              id="bits"
              name="bits"
              value={formState.bits}
              onChange={handleInputChange}
              disabled={formState.type === 'ed25519'} // Disabilita per ED25519 che ha una dimensione fissa
            >
              {bitsByType[formState.type].map(bit => (
                <option key={bit} value={bit}>
                  {bit}
                  {formState.type === 'rsa' && bit === 4096 &&
                    ` (${intl.formatMessage({ id: 'modal.newKey.bits.recommended' })})`}
                  {formState.type === 'dsa' &&
                    ` (${intl.formatMessage({ id: 'modal.newKey.obsolete' })})`}
                </option>
              ))}
            </select>
            {formState.type === 'dsa' && (
              <small className="modal-new-key__warning">
                {intl.formatMessage({ id: 'modal.newKey.dsa.warning' })}
              </small>
            )}
          </div>

          <div className="modal-new-key__field">
            <label htmlFor="comment">{intl.formatMessage({ id: 'modal.newKey.comment.label' })}</label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formState.comment}
              onChange={handleInputChange}
              placeholder={intl.formatMessage({ id: 'modal.newKey.comment.placeholder' })}
            />
            <small>{intl.formatMessage({ id: 'modal.newKey.comment.help' })}</small>
          </div>
        </form>
      </div>
    </Modal>
  )
}

ModalNewKey.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onKeyCreated: PropTypes.func
};

ModalNewKey.defaultProps = {
  isOpen: false,
  onClose: () => { },
  onKeyCreated: () => { }
};

export default ModalNewKey;
