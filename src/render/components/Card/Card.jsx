/**
 *
 * Card
 *
 * @author Vittorio Scaperrotta
 * @date 25-Jun-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  return (
    <div className='card__container'>
      <label className='card__label'>{props.label}</label>
      <p className='card__value'>{props.value}</p>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

Card.defaultProps = {
  label: '',
  value: ''
};

export default Card;
