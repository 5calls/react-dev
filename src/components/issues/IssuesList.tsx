import * as React from 'react';
import {Issue} from '../../common/model';
import { IssuesListItem } from './index';

interface Props {
  readonly issues: Issue[];
  readonly currentIssue: Issue;
  readonly completedIssueIds: string[];
}

const IssuesList: React.StatelessComponent<Props> = ( props: Props) => {

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
            isIssueActive={props.currentIssue && (props.currentIssue.id === issue.id)}
          />) : <div style={{textAlign: 'center'}}>No Issues Found</div>}
      </ul>
    );
};

export default IssuesList;
