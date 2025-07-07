/**
 *
 * ModalDetail
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MoreHorizontal } from 'react-feather';
import Modal from '@components/Modal';
import Badge from '@components/Badge';
import './ModalDetail.scss';

const ModalDetail = (props) => {
  const [expanded, setExpanded] = useState(false);

  function renderValue(label, value = null, key) {
    return (
      <div className='modal-detail__render-value'>
        <label htmlFor="">
          {label}
        </label>
        <p className={`
          ${key === 'PUBLIC_KEY' ? 'publicKey' : ''}
          ${expanded ? 'expanded' : ''}
        `}>
          {value === null ? '-' : value}
        </p>
        {key === 'PUBLIC_KEY' && value !== null ? (
          <button
            className='modal-detail__rende-value-button'
            onClick={() => setExpanded(!expanded)}
          >
            <MoreHorizontal size={24} />
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title='Details Key SSH'
      subtitle='Detail information of the SSH key'
      className='modal-detail'
    >
      <div className='modal-detail__header'>
        <h6>{props.detail.name}</h6>
        <Badge
          label={props.detail.status}
          type={props.detail.status === 'complete' ? 'primary' : 'secondary'}
        />
      </div>

      {props.detail ? (
        <div className='modal-detail__content'>
          {renderValue('Type', props.detail.type, 'TYPE')}
          {renderValue('File', props.detail.file, 'FILE')}
          {renderValue('Public Key', props.detail.publicKey, 'PUBLIC_KEY')}
          {renderValue('Notes', props.detail.notes, 'NOTES')}
          {renderValue('Creation', props.detail.creation, 'CREATION')}
        </div>
      ) : null}
    </Modal>
  )
}

ModalDetail.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  detail: PropTypes.object
};

ModalDetail.defaultProps = {
  isOpen: false,
  onClose: () => { },
  detail: null
};

export default ModalDetail;
