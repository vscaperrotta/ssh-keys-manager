/**
 * i18n Configuration
 *
 * @author Vittorio Scaperrotta
 * @date 10-Jul-2025
 */

import { createIntl, createIntlCache } from 'react-intl';
import enMessages from './locales/en';
import itMessages from './locales/it';

export const LOCALES = {
  ENGLISH: 'en',
  ITALIAN: 'it',
};

export const messages = {
  [LOCALES.ENGLISH]: enMessages,
  [LOCALES.ITALIAN]: itMessages,
};

const getSystemLocale = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langPrefix = browserLang.split('-')[0].toLowerCase();

  return Object.values(LOCALES).includes(langPrefix) ? langPrefix : LOCALES.ITALIAN;
};

export const defaultLocale = getSystemLocale();

// This is optional but highly recommended for performance
// since it prevents unnecessary re-renders when messages don't change
const cache = createIntlCache();

export const createIntlInstance = (locale = defaultLocale) => {
  return createIntl(
    {
      locale,
      messages: messages[locale],
    },
    cache
  );
};

export const intl = createIntlInstance();
