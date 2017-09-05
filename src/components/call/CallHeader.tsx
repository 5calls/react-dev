import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue } from '../../common/model';

interface Props {
  readonly currentIssue: Issue;
  readonly t: TranslationFunction;
}

export const CallHeader: React.StatelessComponent<Props> = ({ currentIssue, t }: Props) => {
  if (currentIssue) {
    return (
      <header className="call__header">
        <h2 className="call__title">{currentIssue.name}</h2>
        <div className="call__reason">
          {currentIssue.reason.split('\n').map((line, index) => 
            <p key={index}>{line}</p>
          )}
        </div>
      </header>
    );
  } else {
    return (
      <header className="call__header">
        <h2 className="call__title">{t('noCalls.title')}</h2>
        <p>{t('noCalls.reason')}</p>
        <p>{t('noCalls.nextStep')}</p>
      </header>
    );
  }
};

export default translate()(CallHeader);

export const CallHeaderTranslatable = translate()(CallHeader);
