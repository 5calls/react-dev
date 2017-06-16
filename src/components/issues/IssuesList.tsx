import * as React from 'react';
import { connect , Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Issue} from '../../common/model';
import IssuesListItem from './IssuesListItem';
import { selectIssueActionCreator } from '../../redux/remoteData/actionCreator';

interface Props {
  issues: Issue[];
}

interface DispatchProps {
  selectIssueActionCreator: (issue: Issue) => void;
//   // getApiData: Function;
}

interface State {
}

export class IssuesList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // tslint:disable-next-line
    console.log('IssuesList issues', this.props.issues);
    return (
      <ul className="issues-list" role="navigation">
        {/* tslint:disable-next-line:max-line-length */}
        {this.props.issues && this.props.issues.map ? this.props.issues.map(issue => <IssuesListItem key={issue.id} issue={issue} selectIssueActionCreator={selectIssueActionCreator}/>) : <div style={{textAlign: 'center'}}>No Issues Found</div>}
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Props>): DispatchProps => {
   return bindActionCreators({selectIssueActionCreator}, dispatch);
};

export default connect<State, DispatchProps, {}>(null, mapDispatchToProps)(IssuesListItem);
