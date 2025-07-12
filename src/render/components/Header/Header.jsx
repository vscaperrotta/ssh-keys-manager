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
  const { title, subtitle, cards, keys } = props;

  // Generare i dati per le cards in base alle chiavi disponibili
  const cardData = cards.map(card => {
    let value = 0;
    if (card.type === 'total') {
      value = keys.length;
    } else if (card.type === 'complete') {
      value = keys.filter(item => item.status === 'complete').length;
    } else if (card.type === 'private') {
      value = keys.filter(item => item.status === 'only priv').length;
    } else if (typeof card.getValue === 'function') {
      value = card.getValue(keys);
    }

    return {
      ...card,
      value
    };
  });

  return (
    <>
      <header className='header__container'>
        <div className='header__content'>
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
        <Divider />
        <div className='header__cards-list'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              label={card.label}
              value={card.value}
            />
          ))}
        </div>
        <Divider />
      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['total', 'complete', 'private']),
    getValue: PropTypes.func
  })),
  keys: PropTypes.array
};

Header.defaultProps = {
  title: '',
  subtitle: '',
  cards: [],
  keys: []
};

export default Header;
