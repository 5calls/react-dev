import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue } from '../../common/model';
import { IssuesListItem } from './index';

interface Props {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly t: TranslationFunction;
  readonly onSelectIssue: (issueId: string) => Function;
}

export const IssuesList: React.StatelessComponent<Props> = (props: Props) => {
  let currentIssueId: string = props.currentIssue ? props.currentIssue.id : '';

  return (
    <ul className="issues-list" role="navigation">
      {props.issues && props.issues.map ? props.issues.map(issue =>
        <IssuesListItem
          key={issue.id}
          issue={issue}
          isIssueComplete={
            props.completedIssueIds &&
            (props.completedIssueIds.find((issueId: string) => issue.id === issueId) !== undefined)
          }
          isIssueActive={currentIssueId === issue.id}
          onSelectIssue={props.onSelectIssue}
        />) : <div style={{ textAlign: 'center' }}>{props.t('noCalls.title')}</div>}
    </ul>
  );
};

export const IssuesListTranslatable = translate()(IssuesList);
