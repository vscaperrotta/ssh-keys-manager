/**
 *
 * Badge
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = (props) => {
  return (
    <div className={`badge badge--${props.type}`}>
      {props.label}
    </div>
  )
}

Badge.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary'])
};

Badge.defaultProps = {
  label: '',
  type: 'primary'
};

export default Badge;
