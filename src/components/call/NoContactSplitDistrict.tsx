import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate, Trans } from 'react-i18next';

interface Props {
  readonly splitDistrict: boolean;
  readonly clearLocation: () => void;
  readonly t: TranslationFunction;
}

class NoContactSplitDistrict extends React.PureComponent<Props> {

  focusTextInput = (e) => {
    this.props.clearLocation();
    window.scroll(1, 1);
  }

  render() {
    return (
      this.props.splitDistrict ?
        // tslint:disable-next-line:jsx-wrap-multiline
        <div className="call__nocontact">
          <div>{this.props.t('noContact.oneOfTwoDistricts')}</div>
          <div>
            <Trans i18nKey="noContact.enterYourLocation">
              <a className="location-link" onClick={this.focusTextInput}>link-text-stub</a>
            </Trans>
          </div>
        </div>
        : <span />
      );
  }
}

export default translate()(NoContactSplitDistrict);
