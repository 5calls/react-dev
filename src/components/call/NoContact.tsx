import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

interface Props {
  readonly t: TranslationFunction;
}

const NoContact: React.StatelessComponent<Props> = (props: Props) => {
  return (
  <div/>
  );
};

export default translate()(NoContact);
