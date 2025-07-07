/**
 *
 * Header
 *
 * @author Vittorio Scaperrotta
 * @date 25-Jun-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@components/Card';
import Divider from '@components/Divider';
import './Header.scss';

const Header = (props) => {
  return (
    <>
      <header className='header__container'>
        <div className='header__content'>
          <h5>SSH Key Manager</h5>
          <p>Gestisci le tue chiavi SSH facilmente</p>
        </div>
        <Divider />
        <div className='header__cards-list'>
          <Card
            label='Totals'
            value={props.keys.length}
          />
          <Card
            label='Complete'
            value={props.keys.filter(item => item.status === 'complete').length}
          />
          <Card
            label='Private'
            value={props.keys.filter(item => item.status === 'only priv').length}
          />
        </div>
        <Divider />
      </header>
    </>
  )
}

Header.propTypes = {
  keys: PropTypes.array
};

Header.defaultProps = {
  keys: []
};

export default Header;
