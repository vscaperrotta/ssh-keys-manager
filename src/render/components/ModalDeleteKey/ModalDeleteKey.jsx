/**
 *
 * ModalDeleteKey
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/Modal';
import './ModalDeleteKey.scss';

const ModalDeleteKey = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title='Delete Key SSH'
    >
    </Modal>
  )
}

ModalDeleteKey.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

ModalDeleteKey.defaultProps = {
  isOpen: false,
  onClose: () => { }
};

export default ModalDeleteKey;
