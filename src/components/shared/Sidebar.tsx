import * as React from 'react';
import { connect } from 'react-redux';
import { Issue } from '../../common/model';
import { IssuesList } from '../issues/IssuesList';

interface DispatchProps {
}

interface Props extends DispatchProps {
  // readonly issues: {issues: Issue[], selectedIssue: Issue};
  readonly issues: Issue[];
}

interface State {
}

class Sidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // tslint:disable-next-line
    console.log('Issues in render(): ', this.props.issues);
    return (<IssuesList issues={this.props.issues} />);
  }
}

const mapStateToProps = (state): State => {
  // tslint:disable-next-line
  console.log('mapStateToProps() state:', state);
  return {
    issues: state.issues
  };
};

export default connect<State, DispatchProps, {}>(mapStateToProps, {})(Sidebar);
