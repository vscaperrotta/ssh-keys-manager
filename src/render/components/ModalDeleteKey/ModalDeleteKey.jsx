/**
 *
 * ModalDeleteKey
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useIntl } from 'react-intl';
import Modal from '@components/Modal';

import Divider from '@components/Divider';
import './ModalDeleteKey.scss';

const ModalDeleteKey = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const intl = useIntl();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:5001/keys/${props.keyData.name}`);
      setIsDeleting(false);
      props.onDelete(props.keyData.id);
      props.onClose();
    } catch (error) {
      console.error(intl.formatMessage({ id: 'modal.delete.error' }), error);
      setIsDeleting(false);
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
      label: isDeleting ? intl.formatMessage({ id: 'modal.delete.deleting' }) : intl.formatMessage({ id: 'app.confirm' }),
      onClick: handleDelete,
      isPrimary: true,
      color: 'error'
    }
  ];

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={intl.formatMessage({ id: 'modal.delete.title' })}
      subtitle={intl.formatMessage({ id: 'modal.delete.confirmation' })}
      actions={actions}
    >
      <div className="modal-delete-key__content">
        <div className="modal-delete-key__details">
          <p><strong>{intl.formatMessage({ id: 'modal.delete.name' })}:</strong> {props.keyData?.name || 'N/A'}</p>
          <p><strong>{intl.formatMessage({ id: 'modal.delete.type' })}:</strong> {props.keyData?.type || 'N/A'}</p>
        </div>

        <Divider />
      </div>
    </Modal>
  )
}

ModalDeleteKey.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  keyData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
  })
};

ModalDeleteKey.defaultProps = {
  isOpen: false,
  onClose: () => { },
  onDelete: () => { },
  keyData: {}
};

export default ModalDeleteKey;
