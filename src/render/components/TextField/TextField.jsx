/**
 *
 * TextField
 *
 * @author vittorioscaperrotta
 * @date 12-Jul-2025
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MoreHorizontal } from 'react-feather';
import './TextField.scss';

const TextField = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='textfield__container'>
      <label htmlFor="" className='textfield__label'>
        {props.label}
      </label>
      <p className={`
        textfield__value
        ${props.id === 'PUBLIC_KEY' ? 'publicKey' : ''}
        ${expanded ? 'expanded' : ''}
      `}>
        {props.value === null ? '-' : props.value}
      </p>
      {props.id === 'PUBLIC_KEY' && props.value !== null ? (
        <button
          className='textfield__render-value-button'
          onClick={() => setExpanded(!expanded)}
        >
          <MoreHorizontal size={24} />
        </button>
      ) : null}
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
};

TextField.defaultProps = {
  label: '',
  value: null,
  id: '',
};

export default TextField;
