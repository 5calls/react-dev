import * as React from 'react';
import {Issue} from '../../common/model';
import { IssuesListItem } from './index';

interface Props {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  onSelectIssue: (issueId: string) => Function;
}

const IssuesList: React.StatelessComponent<Props> = ( props: Props) => {
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
          />) : <div style={{textAlign: 'center'}}>No Issues Found</div>}
      </ul>
    );
};

export default IssuesList;
