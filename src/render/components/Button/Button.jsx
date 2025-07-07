/**
 *
 * Button
 *
 * @author Vittorio Scaperrotta
 * @date 19-Jan-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  return (
    <button
      className={`button button__${props.type} button--${props.color} `}
      onClick={props.onClick}
    >
      {props.icon ? props.icon : null}
      <span className='button__label'>
        {props.label}
      </span>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf(['info', 'error']),
  icon: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => { },
  type: 'primary',
  color: 'info',
  icon: null
};

export default Button;
