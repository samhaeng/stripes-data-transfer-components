import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { prefixKeys } from './prefixKeys';
import translations from '../../translations/stripes-data-transfer-components/en';
import { mockOffsetSize } from './mockOffsetSize';

export function Harness({
  children,
  translations: translationsConfig,
  shouldMockOffsetSize = true,
  width = 500,
  height = 500,
}) {
  const allTranslations = prefixKeys(translations);

  translationsConfig.forEach(tx => {
    Object.assign(allTranslations, prefixKeys(tx.translations, tx.prefix));
  });

  if (shouldMockOffsetSize) {
    mockOffsetSize(width, height);
  }

  return (
    <IntlProvider
      locale="en"
      key="en"
      timeZone="UTC"
      messages={allTranslations}
    >
      {children}
    </IntlProvider>
  );
}

Harness.propTypes = {
  children: PropTypes.node,
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      prefix: PropTypes.string,
      translations: PropTypes.object,
    })
  ),
  shouldMockOffsetSize: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

Harness.defaultProps = {
  width: 500,
  height: 500,
  shouldMockOffsetSize: true,
};
