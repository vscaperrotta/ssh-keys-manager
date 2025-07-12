/**
 *
 * StoriesWrapper
 *
 * @author vittorioscaperrotta
 * @date 11-Jul-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { messages, defaultLocale } from '@i18n';

const StoriesWrapper = (props) => {
  return (
    <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]} >
      {props.children}
    </IntlProvider>
  )
}

StoriesWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

StoriesWrapper.defaultProps = {
  children: null,
};

export default StoriesWrapper;
