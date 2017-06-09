import * as React from 'react';
import { connect, /* Dispatch */ } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Issue } from '../../common/model';
// import { issuesActionCreator } from '../../redux/remoteData/actionCreator';
import {ApplicationState} from '../../redux/root';
import IssuesList from '../issues/IssuesList';
// import {getIssues} from '../../redux/remoteData/apiThunk';

interface DispatchProps {
  // selectIssueActionCreator: (issue: Issue) => void;
  // getApiData: Function;
}

interface Props extends DispatchProps {
  readonly issues: {issues: Issue[], selectedIssue: Issue};
}

interface State {
}

class Sidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
        // console.log('Issuesin render(): ', this.props.issues.issues);
        return (<IssuesList issues={this.props.issues.issues} />);
  }
}

const mapStateToProps = (state: ApplicationState): State => {
  return {
    issues: state.issues
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Props>): DispatchProps => {
  //  return bindActionCreators({getApiData: issuesActionCreator}, dispatch);
// };

export default connect<State, DispatchProps, {}>(mapStateToProps, {})(Sidebar);
