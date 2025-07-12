/**
 * Language Switcher Component
 *
 * @author Vittorio Scaperrotta
 * @date 10-Jul-2025
 */

import React from 'react';
import PropTypes from 'prop-types';
import { LOCALES } from '@i18n';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ currentLocale, onLocaleChange }) => {
  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={(e) => onLocaleChange(e.target.value)}
        className="language-switcher__select"
      >
        <option value={LOCALES.ITALIAN}>Italiano</option>
        <option value={LOCALES.ENGLISH}>English</option>
      </select>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
