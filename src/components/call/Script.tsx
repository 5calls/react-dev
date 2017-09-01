import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue } from '../../common/model';
import { Link } from './index';

interface Props {
  readonly issue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

const Script: React.StatelessComponent<Props> = ({ issue, contactIndex = 0, t }: Props) => {
  if (issue && issue.contacts && issue.contacts.length !== 0) {
    return (
      <div className="call__script">
        <Link
          issue={issue}
          t={t}
        />
        <h3 className="call__script__header">{t('script.yourScript')}</h3>
        <div className="call__script__body">
          {issue.script.split('\n').map((line, index) => 
          <p key={index}>{line}</p>
          )}
          {/* TODO: Format script and add issues link */}
          {/* scriptFormat(state, prev, send) */}
          {/* issuesLink(state, prev, send) */}
        </div>
      </div>
    );
  } else {
    return <span />;
  }
};

export default translate()(Script);
