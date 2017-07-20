import * as React from 'react';
import { Call } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly callState: CallState;
  readonly currentIssue: Issue;
  onSubmitOutcome: (data: OutcomeData) => Function;
  onSelectIssue: (issueId: string) => Function;
}

export interface State {
  currentIssue: Issue;
  callState: CallState;
}

class CallPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      currentIssue: props.currentIssue,
      callState: props.callState,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));
  }

  componentDidMount() {
    this.props.onSelectIssue(this.state.currentIssue.id);
  }

  render() {
    return (
      <Layout
        issues={this.props.issues}
        completedIssueIds={this.props.callState.completedIssueIds}
        currentIssue={this.props.currentIssue}
      >
        <Call
          issue={this.props.currentIssue}
          callState={this.props.callState}
          onSubmitOutcome={this.props.onSubmitOutcome}
        />
      </Layout>
    );
  }
}
export default CallPage;
