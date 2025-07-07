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
  return (
    <div className='search-bar'>
      <input
        type="text"
        className='search-bar__input'
        placeholder='Search'
        onChange={props.onChange}
      />
    </div>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: () => { },
};

export default SearchBar;
