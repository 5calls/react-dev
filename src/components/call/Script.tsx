import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Contact, Issue } from '../../common/model';
import { LocationState } from '../../redux/location/reducer';
import { IssueLink } from './index';

interface Props {
  readonly issue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
  readonly locationState: LocationState;
}

// Replacement regexes, ideally standardize copy to avoid complex regexs
const titleReg = /\[REP\/SEN NAME\]|\[SENATOR\/REP NAME\]/gi;
const locationReg = /\[CITY,\s?ZIP\]|\[CITY,\s?STATE\]/gi;

function getContactNameWithTitle(contacts: Contact[], contactIndex: number) {
    const currentContact = contacts[contactIndex];
    const title = currentContact.area === 'House' ? 'Rep. ' : 'Senator ';
    return title + currentContact.name;
}

function scriptFormat(issue: Issue, locationState: LocationState, contactIndex: number) {
    const location = locationState.cachedCity;
    let script = issue.script;
    if (location) {
         script = script.replace(locationReg, location);
    }
    if (issue.contacts) {
        const title = getContactNameWithTitle(issue.contacts, contactIndex);
        script = script.replace(titleReg, title);
    }
    return script;
}

export const Script: React.StatelessComponent<Props> = ({ issue, contactIndex = 0, locationState, t }: Props) => {
  if (issue && issue.contacts && issue.contacts.length !== 0) {
    return (
      <div className="call__script">
        <IssueLink
          issue={issue}
        />
        <h3 className="call__script__header">{t('script.yourScript')}</h3>
        <div className="call__script__body">
          {scriptFormat(issue, locationState, contactIndex).split('\n').map((line, index) =>
          <p key={index}>{line}</p>
          )}
        </div>
      </div>
    );
  } else {
    return <span />;
  }
};

export const ScriptTranslatable = translate()(Script);
