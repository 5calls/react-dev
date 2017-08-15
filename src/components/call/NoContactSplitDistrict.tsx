import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

interface Props {
  readonly splitDistrict: boolean;
  readonly t: TranslationFunction;
}

const NoContactSplitDistrict: React.StatelessComponent<Props> = (props: Props) => {
  return (
   props.splitDistrict ?
    // tslint:disable-next-line:jsx-wrap-multiline
    <div className="call__nocontact">
      <p>{props.t('noContact.oneOfTwoDistricts')}</p>
      <p>{props.t('noContact.enterYourLocation')}</p>
    </div>
    : <span />
  );
};

export default translate()(NoContactSplitDistrict);
