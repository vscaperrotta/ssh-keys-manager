/**
 *
 * SearchBar
 *
 * @author Vittorio Scaperrotta
 * @date 07-Jul-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import './SearchBar.scss';

const SearchBar = (props) => {
  const {
    onChange,
    onReset,
    value,
    placeholder,
    resetButtonLabel
  } = props;

  return (
    <div className='search-bar'>
      <input
        type="text"
        className='search-bar__input'
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(e);
          }
        }}
        value={value || ''}
      />
      <Button
        label={resetButtonLabel}
        type='secondary'
        onClick={onReset}
        className='search-bar__reset-button'
      />
    </div>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  resetButtonLabel: PropTypes.string
};

SearchBar.defaultProps = {
  onChange: () => { },
  onReset: () => { },
  value: '',
  placeholder: '',
  resetButtonLabel: ''
};

export default SearchBar;
