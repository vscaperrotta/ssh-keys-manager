/**
 *
 * ModalNewKey
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/Modal';
import './ModalNewKey.scss';

const ModalNewKey = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title='Create New SSH Key'
      subtitle='Form to create a new SSH key'
    >
    </Modal>
  )
}

ModalNewKey.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

ModalNewKey.defaultProps = {
  isOpen: false,
  onClose: () => { }
};

export default ModalNewKey;
