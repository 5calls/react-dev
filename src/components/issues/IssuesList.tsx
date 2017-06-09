import * as React from 'react';
import {Issue} from '../../common/model';
import IssuesListItem from './IssuesListItem';

interface Props {
  issues: Issue[];
}

const IssuesList: React.StatelessComponent<Props> = (props: Props) => {
  // tslint:disable-next-line
  console.log('IssuesList issues', props.issues);
  // if (props.issues.issues) {
  // // tslint:disable-next-line
  //   props.issues.issues.map(issue => console.log('IssueList Issue', issue));
  // }
  return (
  <ul className="issues-list" role="navigation">
    {/* tslint:disable-next-line:max-line-length */}
    {props.issues && props.issues.map ? props.issues.map(issue => <IssuesListItem key={issue.id} issue={issue}/>) : <div style={{textAlign: 'center'}}>No Issues Found</div>}
  </ul>
);
};

export default IssuesList;
