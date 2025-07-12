/**
 *
 * ModalDetail
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { MoreHorizontal } from 'react-feather';
import Modal from '@components/Modal';
import Badge from '@components/Badge';
import TextField from '@components/TextField';
import './ModalDetail.scss';

const ModalDetail = (props) => {
  const [expanded, setExpanded] = useState(false);
  const intl = useIntl();

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
      title={intl.formatMessage({ id: 'modal.detail.title' })}
      subtitle={intl.formatMessage({ id: 'modal.detail.subtitle' })}
      className='modal-detail'
    >
      <div className='modal-detail__header'>
        <h6>{props.detail.name}</h6>
        <Badge
          label={intl.formatMessage({ id: `status.${props.detail.status === 'complete' ? 'complete' : props.detail.status === 'only priv' ? 'onlyPrivate' : 'unknown'}` })}
          type={props.detail.status === 'complete' ? 'primary' : 'secondary'}
        />
      </div>

      {props.detail ? (
        <div className='modal-detail__content'>
          <TextField label={intl.formatMessage({ id: 'table.type' })} value={props.detail.type} id='TYPE' />
          <TextField label={intl.formatMessage({ id: 'table.file' })} value={props.detail.file} id='FILE' />
          <TextField label={intl.formatMessage({ id: 'modal.detail.publicKey' })} value={props.detail.publicKey} id='PUBLIC_KEY' />
          <TextField label={intl.formatMessage({ id: 'table.notes' })} value={props.detail.notes} id='NOTES' />
          <TextField label={intl.formatMessage({ id: 'table.creation' })} value={props.detail.creation} id='CREATION' />
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
