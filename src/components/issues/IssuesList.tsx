import * as React from 'react';
import {Issue} from '../../common/model';
import IssuesListItem from './IssuesListItem';

interface Props {
  issues: Issue[];
}
interface State {
}

class IssuesList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul className="issues-list" role="navigation">
        {/* tslint:disable-next-line:max-line-length */}
        {this.props.issues && this.props.issues.map ? this.props.issues.map(issue => <IssuesListItem key={issue.id} issue={issue} />) : <div style={{textAlign: 'center'}}>No Issues Found</div>}
      </ul>
    );
  }
}

export default IssuesList;
