import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { find } from 'lodash';
import { Issue } from '../../common/model';
import { IssuesListItem } from './index';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly t: TranslationFunction;
  readonly onSelectIssue: (issueId: string) => Function;
}

export const IssuesList: React.StatelessComponent<Props> = (props: Props) => {
  let currentIssueId: string = props.currentIssue ? props.currentIssue.id : '';
  
  console.log("path",props.match.path);
  if (props.match.path === '/group/:id' || props.match.path === '/group/:id/:issueid') {
    return (
      <ul className="issues-list" role="navigation">
        {props.issues && props.issues.map ? props.issues.map(issue =>
          <IssuesListItem 
            key={issue.id}
            issue={issue}
            isIssueComplete={
              props.completedIssueIds &&
              (find(props.completedIssueIds, (issueId: string) => issue.id === issueId) !== undefined)
            }
            isIssueActive={currentIssueId === issue.id}
            showGroupLinks={true}
            onSelectIssue={props.onSelectIssue}
            match={props.match}
            location={props.location}
            history={props.history}
          />) : <div style={{ textAlign: 'center' }}>{props.t('noCalls.title')}</div>}
      </ul>
    );
  } else {
    return (
      <ul className="issues-list" role="navigation">
        {props.issues && props.issues.map ? props.issues.map(issue =>
          <IssuesListItem
            key={issue.id}
            issue={issue}
            isIssueComplete={
              props.completedIssueIds &&
              (find(props.completedIssueIds, (issueId: string) => issue.id === issueId) !== undefined)
            }
            isIssueActive={currentIssueId === issue.id}
            showGroupLinks={false}
            onSelectIssue={props.onSelectIssue}
            match={props.match}
            location={props.location}
            history={props.history}
          />) : <div style={{ textAlign: 'center' }}>{props.t('noCalls.title')}</div>}
        <li>
          <Link
            to={`/more`}
            className={`issues__footer-link`}
          >
            <span>{props.t('issues.viewAllActiveIssues')}</span>
          </Link>
        </li>
      </ul>
    );
  }
};

export const IssuesListTranslatable = translate()(IssuesList);
